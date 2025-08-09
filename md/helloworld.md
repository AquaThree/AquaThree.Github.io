## 1:创建Java文件

打开资源管理器，点击查看勾选文件扩展名。
<br>
新建一个后缀为.txt的文本文件，并右键它点击重命名将文件名称和后缀改为HelloWorld.java。
<br>
<br>
双击用记事本打开它并输入：

<br>

```java
public class HelloWorld {
    public static void main(String[] args){
        System.out.println("Hello World!");
    }
}
```

<br>

## 2:将Java文件编译为Class文件

同时点击win+r输入cmd打开命令提示符。
<br>
输入刚刚创建的Java文件所在的盘符，接着输入：

<br>

```shell
cd Java文件所在的目录
```

<br>

输入：

<br>

```shell
javac HelloWorld.java
```

<br>

即可编译Class文件。

<br>

## 3:运行Class文件

在刚才的命令提示符中输入：

<br>

```shell
java HelloWorld
```

<br>

命令提示符输出：

<br>

```shell
输出：Hello World!
```
