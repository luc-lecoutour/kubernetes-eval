export KUBECONFIG=../../kubeconfig.yml
# delete the cluster if it exists
kubectl delete -f service.yaml
kubectl delete -f front-deployment.yaml

# create the cluster
kubectl create -f service.yaml
kubectl create -f front-deployment.yaml

# get the cluster info
kubectl get deployments
kubectl get pods
kubectl get services