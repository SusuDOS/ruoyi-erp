# 使用基础镜像
FROM openjdk:17-jdk-alpine

# 安装字体库，解决字体相关的问题
RUN apk add --no-cache fontconfig ttf-dejavu

# 将JAR文件复制到容器中
COPY target/ruoyi-admin.jar /app/ruoyi-admin.jar

# 暴露应用的端口
EXPOSE 8080

# 运行应用，设置为无头模式以避免图形界面相关错误
ENTRYPOINT ["java", "-Djava.awt.headless=true", "-jar", "/app/ruoyi-admin.jar"]
