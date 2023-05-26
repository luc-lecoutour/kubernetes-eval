#### run project
```shell
chmod +x run.sh
./run.sh
```

#### commands

```shell
export KUBECONFIG=../kubeconfig.yml
```

#### redis deployment
```shell
kubectl delete -f redis-deployment.yaml
```
```shell
kubectl apply -f redis-deployment.yaml
```

#### redis node-deployment
```shell
kubectl delete -f redis-node-deployment.yaml
```
```shell
kubectl apply -f redis-node-deployment.yaml
```

#### service deployment 
```shell
kubectl delete -f service-redis.yaml
```
```shell
kubectl apply -f service-redis.yaml
```

```shell
kubectl get deployments
```
```shell
kubectl  logs <pod-id>
```

```shell
kubectl get pods
```

#### multiple deployment
```shell
kubectl scale deployment node-redis-luc --replicas=3
```