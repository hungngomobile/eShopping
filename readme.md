# .Net Core Microservices using Clean Architecture Implementation


Hi Friends,

This is an ecommerce app using clean architecture and tons of others server side and client side technologies.

## Introduction
In this section, you will learn how to build full fledged Ecommerce app using asp.net core, docker, kubernetes, helm charts, service mesh and angular 15. Below are the key takeaways from this project. Anyone who wants to learn and write professional enterpise projects can refer this project. This project not only illustrates how to implement all layers to the point rather it adheres to best practices as followed by industry.
 
Here, you will learn variety of technologies like

-	Clean Architecture
-	.Net Core
-	Docker
-	Kubernetes
-	Azure
-	Microservices
-	Service Mesh 
-	Angular
-	ELK Stack
-	Pub/Sub Pattern
-	GRPC
-	Repository Pattern
-	Unit of Work Pattern
-	Specification Pattern
-	Helm Charts

## How Project is structured 

Below, I have Pasted the high level glimpse project structure.

![image](https://user-images.githubusercontent.com/3886381/223644278-a73caeef-81c5-4278-b76e-c17fc2e83f88.png)

Client Structure goes like

![image](https://user-images.githubusercontent.com/3886381/214280752-a580106c-0dcc-4a3b-8aa2-ef12deab8a53.png)

## Deployments

![image](https://user-images.githubusercontent.com/3886381/214281990-d16b4dea-635c-4a7e-9929-191767ce297d.png)

## Warning and Disclaimer

Every effort applied to make this project complete and accurate to the topic, but no warranty is implied. Any implementation in this project are MY OWN and also borrowed from best practices segment. ALL content presented AS-IS, for learning purposes only. Also this course will go  keep updated as and when new and stable framework gets released.

## Workflow

![image](https://user-images.githubusercontent.com/3886381/223646965-ed342a32-e0ce-48cf-a6f7-f4603638a04a.png)

![image](https://user-images.githubusercontent.com/3886381/223647104-3a690b32-c3f9-4381-9d49-bc326135e84a.png)

![image](https://user-images.githubusercontent.com/3886381/223647659-ec7eea02-9f3f-4d5d-b0a7-cc0a8cb1ea56.png)

![image](https://user-images.githubusercontent.com/3886381/223648377-bcfde993-92fd-4ca8-90ea-414e65a17738.png)

![image](https://user-images.githubusercontent.com/3886381/214284123-f364f89b-7590-473b-bbb5-f040785f91f0.png)

![image](https://user-images.githubusercontent.com/3886381/223646462-8ab8ae31-21d2-4c95-9b59-49d88ce94a86.png)

![image](https://user-images.githubusercontent.com/3886381/223646965-ed342a32-e0ce-48cf-a6f7-f4603638a04a.png)

![image](https://user-images.githubusercontent.com/3886381/223648742-3a9c620a-1205-48b8-b67f-0bd00565ea57.png)


### Installation
Follow these steps to get your development environment set up: (Before Run Start the Docker Desktop)
1. Clone the repository
2. Once Docker for Desktop is installed, go to the **Settings > Advanced option**, from the Docker icon in the system tray, to configure the minimum amount of memory and CPU like so:
* **Memory: 7 GB**
* CPU: 5
3. At the root directory which include **docker-compose.yml** files, run below command:
```csharp
docker-compose -f docker-compose.yml -f docker-compose.override.yml up -d
```

![image](https://user-images.githubusercontent.com/3886381/221078010-61bd0cc8-af27-473a-9e96-9199668cd9d7.png)

## Project Overview
![image](https://user-images.githubusercontent.com/3886381/221078142-269efa48-865c-42fe-8304-7c0d69603f52.png)

## Pub/Sub Pattern

![image](https://user-images.githubusercontent.com/3886381/221078310-f5fda60f-e194-4fea-98b2-7d9ac1318017.png)

* In the above diagram as we can see before checkout event created basket gets deleted from Redis database.

### Container Management via Portainer

![image](https://user-images.githubusercontent.com/3886381/223689199-c4f08b11-cee9-490d-afd5-dd58f437cc0b.png)


## Elastic Search
![image](https://user-images.githubusercontent.com/3886381/223689686-55b3200b-8391-409f-ad23-bf329d8284de.png)


## AKS Workloads

![image](https://user-images.githubusercontent.com/3886381/210868687-3ce72999-1187-4826-94f3-14db9d79bde5.png)

## AKS Monitoring
![image](https://user-images.githubusercontent.com/3886381/210528612-9b8a8211-abc8-4a86-806a-c94d3f0dfb96.png)

## Pods Overview Kube Lens
![image](https://user-images.githubusercontent.com/3886381/210942031-14a2b935-a7f2-48f1-b97d-affe199030fe.png)

![image](https://user-images.githubusercontent.com/3886381/210942401-39084590-7670-4067-956b-772c28f2f508.png)

## Deployments

![image](https://user-images.githubusercontent.com/3886381/210942812-fe244069-5aba-4b48-9c68-9b503b540854.png)

## ConfigMaps

![image](https://user-images.githubusercontent.com/3886381/210943017-97b65ee3-5b70-4d5f-972c-5b75ff92ba7b.png)

## Secrets

![image](https://user-images.githubusercontent.com/3886381/210944092-68c586ff-528e-48f6-81f5-df07fc2bf2d1.png)

## HPA (Horizontal Pods AutoScaler)

![image](https://user-images.githubusercontent.com/3886381/210944313-4f33e12d-dcf2-475c-9bc6-9abb4f56f4a7.png)

## Kibana

kubectl port-forward service/kibana 5602:5601

![image](https://user-images.githubusercontent.com/3886381/210946644-63d6ade6-71f0-458e-a823-632619ba6c11.png)

## Istio

After Installing Istioctl and Addons its pods will look like 
### kubectl get pod -n istio-system

![image](https://user-images.githubusercontent.com/3886381/211144670-d76a2c50-effe-4686-97f0-e28fe8a807fb.png)

And its services will look like this
### kubectl get svc -n istio-system

![image](https://user-images.githubusercontent.com/3886381/211144715-4f24b04f-77e7-4506-bcef-155b91d7fbc0.png)

### Istio via Kubelens

![image](https://user-images.githubusercontent.com/3886381/223685878-0dd5e6ad-2e20-476a-9429-976bb3c4d1e6.png)

## Kiali (Service Mesh Management for Istio)

In order to access the same, we need to port forward the kiali like 
### kubectl port-forward svc/kiali -n istio-system 20002:20001

This will bring Kiali UI like 

![image](https://user-images.githubusercontent.com/3886381/211145703-1c96806f-c9b6-41a4-8aaa-64ce47784590.png)

## Kiali Workloads

![image](https://user-images.githubusercontent.com/3886381/211145786-802b6080-227c-49b8-b7b1-6c9d271095c3.png)

## Kiali Workload Overview

![image](https://user-images.githubusercontent.com/3886381/211146477-5071ca5f-30a0-47a3-bebb-bc9a3db3881c.png)

## Graphana Visualization

![image](https://user-images.githubusercontent.com/3886381/211147911-88fd9853-cf3b-48d9-82e5-453ec0ab7fb2.png)