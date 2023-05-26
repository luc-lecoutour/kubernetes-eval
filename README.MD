Deployment

To deploy the node-redis-sakir application, follow these steps:

<ol>
<li> Clone this repository to your local machine or download the deployment.yml file. </li>
<li> Open a terminal and navigate to the directory containing the deployment.yml file. </li>
</ol>

Explication création du front
<ol>
<li> Créer une image docker. </li>
<li>tag l'image et la push sur https://cloud.canister.io/n/luke34/front. </li>
<li>crée un service.yaml et un déployment.yaml. </li>
<li>executer le déploiement des yaml </li>
<li>executer kubectl get services et regarder l'ip externe et copier coller l'ip suivi du port. exemple 194.125.456:5000 </li>
</ol>


#### run project
```shell
chmod +x run.sh
./run.sh
```

#### run react front
```shell
cd react/client/
chmod +x run.sh
./run.sh
```




#### commands (bash marche pas chez moi du coup obligé de faire des commandes à la mano)

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

#### front deployment
```shell
cd react/client/
&& export KUBECONFIG=../../kubeconfig.yml
&&
kubectl delete -f service.yaml 
&& 
kubectl apply -f service.yaml
&&
kubectl delete -f front-deployment.yaml 
&& 
kubectl apply -f front-deployment.yaml 

```

#### multiple deployment
```shell
kubectl scale deployment node-redis-luc --replicas=3
```

```
docker tag front cloud.canister.io:5000/luke34/front:front
```

````
docker push cloud.canister.io:5000/luke34/front:front
````