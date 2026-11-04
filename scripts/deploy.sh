#!/usr/bin/env bash
# Build image, push to ECR, roll ECS service. Requires Docker running + AWS CLI creds.
set -euo pipefail
REGION=ap-south-1
REPO=401933430312.dkr.ecr.$REGION.amazonaws.com/abs-web
TAG=$(git rev-parse --short HEAD)

aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin "${REPO%%/*}"
docker buildx build --platform linux/amd64 --provenance=false --sbom=false \
  -t "$REPO:latest" -t "$REPO:$TAG" --push .
aws ecs update-service --region $REGION --cluster abs-web --service abs-web --force-new-deployment >/dev/null
echo "Deploying $TAG... waiting for stable"
aws ecs wait services-stable --region $REGION --cluster abs-web --services abs-web
echo "Done: https://analyticabs.co.in"
