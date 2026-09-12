variable "bucket_name" {
  description = "Nombre único global del bucket S3 para dev"
  type        = string
}

variable "aws_region" {
  description = "Región de AWS"
  type        = string
  default     = "us-east-1"
}
