# docker容器方式启动


代码库：https://github.com/Quart233/ruoyi-erp，修改调整版本。


## 一、前置条件

- 1、redis需要准备好

```bash
mkdir -p /usr/local/etc/redisContain
```
配置文件: `vim /usr/local/etc/redisContain/redis.conf`

```config
# 绑定地址
bind 0.0.0.0

# 端口
port 6379

# 密码保护
requirepass redis@RuoYI

# 连接超时时间（秒）
timeout 10
```

- 2、Mysql数据需要准备好

建库导表：`mkdir /usr/local/etc/mysqlContain`

```bash
docker run --rm -d --name mysql-container -e MYSQL_ROOT_PASSWORD=ruoyi@TenHK -p 3306:3306 -v /usr/local/etc/mysqlContain:/var/lib/mysql mysql:8.0.12


将sql下面的所有表一一导入数据库...
```
- 3、ruoyi-admin镜像需要装备好

```bash 
# 项目主目录下运行.
mvn clean install [&& mvn package]

# 安装docker、docker-compose

cd ruoyi-admin && docker build -t ruoyi-admin .
```

- 4、前端页面需要装备好

安装nodejs管理器.

```bash
# 更新
apt update
apt install curl

# 安装nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash


# 验证
source ~/.bashrc
nvm --version


# 安装nodejs 14lts版本
nvm install 14
nvm use 14

# 切ui路径
cd ruoyi-ui

# 安装依赖,找不到，就把上面两行再执行一下.
npm install

# or
npm install --registry=https://registry.npm.taobao.org


# 启动  
npm run dev 


# 构建
npm run build
```

## 二、启动容器

```bash
# 查看容器
docker ps -a

# 停止mysql容器
docker stop mysql-container

docker-compose up -d

# 启动成功后。
# 访问 http://localhost:8080 即可访问后台管理系统。
# 访问 http://localhost:9090 前端页面。
```