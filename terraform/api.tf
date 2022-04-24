
variable "aws_dynamodb_table_todos_name" {
  type    = string
  default = "TodoTable"
}

variable "aws_iam_role_appsync_todos_api_name" {
  type        = string
  default     = "appsync_todos_api_role"
  description = "Appsync execution role"
}

variable "aws_iam_role_policy_appsync_todos_api_name" {
  type        = string
  default     = "appsync_todos_api_role_policy"
  description = "Appsync execution role policy"
}

variable "aws_appsync_datasource_todos_name" {
  type    = string
  default = "TodoDatasource"
}

variable "aws_appsync_graphql_api_todos_name" {
  type    = string
  default = "todos_api"
}

data "local_file" "graphql_todos_api_schema" {
  filename = "appsync/graphql/schema.graphql"
}

data "local_file" "graphql_resolver_create_todo" {
  filename = "appsync/graphql/resolvers/createTodo.vm"
}

data "local_file" "graphql_resolver_update_todo" {
  filename = "appsync/graphql/resolvers/updateTodo.vm"
}

data "local_file" "graphql_resolver_delete_todo" {
  filename = "appsync/graphql/resolvers/deleteTodo.vm"
}

data "local_file" "graphql_resolver_get_todo" {
  filename = "appsync/graphql/resolvers/getTodo.vm"
}

data "local_file" "graphql_resolver_list_todos" {
  filename = "appsync/graphql/resolvers/listTodos.vm"
}

data "local_file" "graphql_resolver_response" {
  filename = "appsync/graphql/resolvers/response.vm"
}

resource "aws_dynamodb_table" "todos_table" {
  name         = "${var.app_name}_${var.app_env}_${var.aws_dynamodb_table_todos_name}"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }
}

resource "aws_iam_role" "appsync_todos_api_role" {
  name               = "${var.aws_iam_role_appsync_todos_api_name}"
  assume_role_policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": "sts:AssumeRole",
            "Principal": {
                "Service": "appsync.amazonaws.com"
            },
            "Effect": "Allow"
        }
    ]
}
EOF
}

resource "aws_iam_role_policy" "appsync_todos_api_role_policy" {
  name = "${var.aws_iam_role_policy_appsync_todos_api_name}"
  role = "${aws_iam_role.appsync_todos_api_role.id}"
  policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "dynamodb:*"
            ],
            "Effect": "Allow",
            "Resource": [
                "${aws_dynamodb_table.todos_table.arn}",
                "${aws_dynamodb_table.todos_table.arn}/*"
            ]
        }
    ]
}
EOF
}

resource "aws_appsync_graphql_api" "todos_api" {
  authentication_type = "AMAZON_COGNITO_USER_POOLS"
  name                = "${var.app_name}_${var.app_env}_${var.aws_appsync_graphql_api_todos_name}"
  schema              = "${data.local_file.graphql_todos_api_schema.content}"
  user_pool_config {
    aws_region     = "${var.aws_default_region}"
    default_action = "ALLOW"
    user_pool_id   = "${aws_cognito_user_pool.userpool.id}"
  }
}

resource "aws_appsync_datasource" "todos_datasource" {
    api_id           = "${aws_appsync_graphql_api.todos_api.id}"
    name             = "${var.aws_appsync_datasource_todos_name}"
    service_role_arn = "${aws_iam_role.appsync_todos_api_role.arn}"
    type             = "AMAZON_DYNAMODB"
    dynamodb_config {
        table_name = "${aws_dynamodb_table.todos_table.name}"
    }
}

resource "aws_appsync_resolver" "create_todo" {
  api_id            = "${aws_appsync_graphql_api.todos_api.id}"
  field             = "createTodo"
  type              = "Mutation"
  data_source       = "${aws_appsync_datasource.todos_datasource.name}"
  request_template  = "${data.local_file.graphql_resolver_create_todo.content}"
  response_template = "${data.local_file.graphql_resolver_response.content}"
}

resource "aws_appsync_resolver" "update_todo" {
  api_id            = "${aws_appsync_graphql_api.todos_api.id}"
  field             = "updateTodo"
  type              = "Mutation"
  data_source       = "${aws_appsync_datasource.todos_datasource.name}"
  request_template  = "${data.local_file.graphql_resolver_update_todo.content}"
  response_template = "${data.local_file.graphql_resolver_response.content}"
}

resource "aws_appsync_resolver" "delete_todo" {
  api_id            = "${aws_appsync_graphql_api.todos_api.id}"
  field             = "deleteTodo"
  type              = "Mutation"
  data_source       = "${aws_appsync_datasource.todos_datasource.name}"
  request_template  = "${data.local_file.graphql_resolver_delete_todo.content}"
  response_template = "${data.local_file.graphql_resolver_response.content}"
}

resource "aws_appsync_resolver" "get_todo" {
  api_id            = "${aws_appsync_graphql_api.todos_api.id}"
  field             = "getTodo"
  type              = "Query"
  data_source       = "${aws_appsync_datasource.todos_datasource.name}"
  request_template  = "${data.local_file.graphql_resolver_get_todo.content}"
  response_template = "${data.local_file.graphql_resolver_response.content}"
}

resource "aws_appsync_resolver" "list_todos" {
  api_id            = "${aws_appsync_graphql_api.todos_api.id}"
  field             = "listTodos"
  type              = "Query"
  data_source       = "${aws_appsync_datasource.todos_datasource.name}"
  request_template  = "${data.local_file.graphql_resolver_list_todos.content}"
  response_template = "${data.local_file.graphql_resolver_response.content}"
}