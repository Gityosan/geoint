resource "local_file" "aws_exports_js" {
  filename = "../src/aws-exports.js"
  content  = <<EOF
const awsmobile = {
    "aws_project_region": "${var.aws_default_region}",
};
export default awsmobile;
EOF
}