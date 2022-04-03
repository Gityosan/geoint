# amplify add auth　に相当する設定
variable "aws_cognito_user_pool_name" {
  type    = string
  default = "user_pool"
}

variable "aws_cognito_user_pool_client_web_name" {
  type    = string
  default = "user_pool_client_web"
}

variable "aws_cognito_user_pool_client_app_name" {
  type    = string
  default = "user_pool_client_app"
}

variable "aws_cognito_identity_pool_name" {
  type    = string
  default = "identity_pool"
}

resource "aws_cognito_user_pool" "userpool" {
  name = "${var.app_name}_${var.app_env}_${var.aws_cognito_user_pool_name}"
  auto_verified_attributes = [
    "email"
  ]

  password_policy {
    minimum_length    = 8
    require_lowercase = true
    require_numbers   = true
    require_symbols   = false
    require_uppercase = false
  }
}

resource "aws_cognito_user_pool_client" "webclient" {
  name            = "${var.app_name}_${var.app_env}_${var.aws_cognito_user_pool_client_web_name}"
  user_pool_id    = "${aws_cognito_user_pool.userpool.id}"
  generate_secret = false
}

resource "aws_cognito_user_pool_client" "appclient" {
  name            = "${var.app_name}_${var.app_env}_${var.aws_cognito_user_pool_client_app_name}"
  user_pool_id    = "${aws_cognito_user_pool.userpool.id}"
  generate_secret = false
}

resource "aws_cognito_identity_pool" "idpool" {
  identity_pool_name               = "${var.app_name}_${var.app_env}_${var.aws_cognito_identity_pool_name}"
  allow_unauthenticated_identities = true
  cognito_identity_providers {
    client_id               = "${aws_cognito_user_pool_client.webclient.id}"
    provider_name           = "${aws_cognito_user_pool.userpool.endpoint}"
    server_side_token_check = false
  }
  cognito_identity_providers {
    client_id               = "${aws_cognito_user_pool_client.appclient.id}"
    provider_name           = "${aws_cognito_user_pool.userpool.endpoint}"
    server_side_token_check = false
  }
}

resource "aws_cognito_identity_pool_roles_attachment" "user_role_attachment" {
  identity_pool_id = "${aws_cognito_identity_pool.idpool.id}"
  roles = {
    "authenticated"   = "${aws_iam_role.authenticated_user.arn}"
    "unauthenticated" = "${aws_iam_role.unauthenticated_user.arn}"
  }
}