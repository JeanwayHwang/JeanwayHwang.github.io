---
title: String 类常见方法
date: 2018-09-29 18:36:25
tags:
  - Java
  - JavaSE
  - String 类
categories:
  - Java
urlname: java_String
img: https://img.staunchkai.com/java_String/thumbnail.jpg
---
**String（字符串）：**由多个字符组成的一串数据，也可以看为一个字符数组。
字符串文字，例如 “staunch” 也可以看作一个字符串对象（实例）。

Eg:
```java
String str = "abc";
```

```java
char[] arr = {'a', 'b', 'c'};
String str = new String(arr);
```

# 构造方法
## 1. 空构造
`String();` 初始化新创建的 String 对象，使其表示空字符序列。

```java
String s1 = new String();
System.out.println("s1:" + s1);     // s1:
System.out.println("s1.length:" + s1.length());     // s1.length:0
```

## 2. 字节数组转为字符串
`String(byte[] bytes)` 传入字节数组，转换为字符串。

> 通常使用平台默认字符集解码指定的字节数组
例如：ASCII 码

```java
byte[] bys = { 97, 98, 99, 100, 101 };
System.out.println("s2:" + s2);     // s2:abcde
System.out.println("s2.length:" + s2.length());    // s2.length:5
```

`String(byte[] bytes, int index, int length)` 把字节数组的一部分转成字符串

**参数列表：**

| byte[] bytes | int index | int length |
| ------ | ------ | ------ |
| 传入的数组 | 指定从哪个元素开始 | 指定的长度 |

```java
byte[] bys = { 97, 98, 99, 100, 101 };
String s3 = new String(bys, 1, 3);
System.out.println("s3:" + s3);     // s3:bcd
System.out.println("s3.length:" + s3.length());     // s3.length:3
```

## 3. 字符数组转为字符串
`String(char[] value)` 把字符数组转成字符串。

```java
char[] chs = { 'a', 'b', 'c', 'd', 'e', '数', '组' };
String s4 = new String(chs);
System.out.println("s4:" + s4);     // s4:abcde数组
System.out.println("s4.length:" + s4.length());     // s4.length():7
```

`String(char[] value, int index, int count)` 把字符数组的一部分转成字符串。

**参数列表：**

| char[] value | int index | int length |
| ------ | ------ | ------ |
| 传入的数组 | 指定从哪个元素开始 | 指定的长度 |

```java
char[] chs = { 'a', 'b', 'c', 'd', 'e', '数', '组' };
String s5 = new String(chs, 1, 3);
System.out.println("s5:" + s5);     // s5:bcd
System.out.println("s5.length:" + s5.length());   // s5.length:3
```

> `IndexOutOfBoundsException` 索引超出了数组范围。

## 4. 字符串常量转为字符串
`String(String original)` 把字符串常量值转成字符串。(了解)

# String 的特点
> 一旦被赋值，就不能被改变。

这里所说的特点，并不是字面意思上的值的内容不可变。

```java
String s = "Staunch";
s += "Kai";
System.out.println("s:" + s);
```
此结果为：`s:StaunchKai`。

字符串直接赋值的方式是先到 **字符串常量池** 里面寻找是否存在这个值，如果有，就直接返回，反之，就创建并返回。

`String s = "Staunch"` 先到 **字符串常量池** 中寻找是否存在 `Staunch`，里面不存在，就创建一个空间。

`s += "Kai"` 同样到 **字符串常量池** 中找是否存在，而上面说过一旦被赋值，就不能被改变，所以 `Staunch` 这个空间是不能够被修改的。这时的 `"Kai"` 就要自己重新创建一个空间。两个空间的地址值是不一样的。`+=` 可以理解为把两个 **拼接** 起来，于是便创建了第三个空间，里面的内容就是 `StaunchKai`。

这个时候，`String s` 指向的就是第三个空间，不再是 `Staunch` 的空间了。

# 判断功能
```java
String s1 = "helloworld";
String s2 = "helloworld";
String s3 = "HelloWorld";
```

## 1. 比较字符串的内容是否相同
`boolean equals(Object obj) obj` 是要比的对象。与指定的对象进行对比。

```java
System.out.println(s1.equals(s2));  // true
System.out.println(s1.equals(s3));  // false
```
`boolean equalsIgnoreCase(String str)` 同时，只不过比较时忽略大小。
```java
System.out.println(s1.equalsIgnoreCase(s2));    // true
System.out.println(s1.equalsIgnoreCase(s3));    // true
```

## 2. 判断大的字符串中是否包含小的字符串
`boolean contains(String str)` 例如：判断 `a` 是否存在于 `abc` 之中。
```java
System.out.println(s1.contains("hell"));      // true
System.out.println(s1.contains("wr"));        // false
```

## 3. 判断字符串开头及结尾
`startsWith(String str)` 判断字符串是否以某个指定的字符串开头。
```java
System.out.println(s1.startsWith("hell"));    // true
System.out.println(s1.startsWith("world"));   // false
```
`boolean endsWith(String str)` 判断字符串是否以某个指定的字符串结尾。
```java
System.out.println(s1.endsWith("hell"));    // false
System.out.println(s1.endsWith("world"));   // true
```

## 4. 判断是否为空
`boolean isEmpty()` 判断字符串是否为空。
```java
System.out.println(s1.isEmpty());   // false

String s4 = "";
String s5 = null;
System.out.println(s4.isEmpty());   // true
System.out.println(s5.isEmpty());   // NullPointerException, s5 对象都不存在，不能调用方法，空指针异常
```

# 异同
`String s1 = new String("hello")` 与 `String s2 = "hello"` 的区别：
- `String s1 = new String("hello")` 创建两个对象，在堆内存中 `new` 后，又在字符串常量池创建了 `hello`。
- `String s2 = "hello"` 只创建一个对象，直接在字符串常量池创建了 `hello`。

`s1 == s2` 与 `s1.equals(s2)` 的区别：
- `==` 比较引用类型，比较的是：地址值是否相同。
- `equals` 比较引用类型，默认也是比较地址值是否相同，而 `String` 类重写了该方法，比较的是内容是否相同。

# 获取功能
```java
String s = "helloworld";
```

## 1. 获取长度
`int length()` 获取字符串的长度。
```java
System.out.println(s.length());     // 10
```

## 2. 获取索引位置的字符
`char charAt(int index)` 获取指定索引位置的字符。
```java
System.out.println(s.charAt(7));    // r
```

## 3. 获取字符（字符串）第一次出现的索引
`int indexOf(int ch)` 返回指定字符在此字符串中第一次出现处的索引。
```java
System.out.println(s.indexOf("l"));     // 2
```
`int indexOf(String str)` 返回指定字符串在此字符串中第一次出现处的索引。
```java
System.out.println(s.indexOf("ow"));     // 4
```

## 4. 获取字符（字符串）从指定位置后第一次出现的索引
`int indexOf(int ch,int fromIndex)` 返回指定字符在此字符串中从指定位置后第一次出现处的索引.
```java
System.out.println(s.indexOf("l", 4));    // 8
```
`int indexOf(String str, int fromIndex)` 返回指定字符串在此字符串中从指定位置后第一次出现处的索引.
```java
System.out.println(s.indexOf("owo", 4));      // 4
```

## 5. 截取字符串
`String substring(int start)` 从指定位置开始截取字符串，默认到末尾。
```java
System.out.println(s.substring(3));     // loworld
```
`String substring(int start, int end)` 从指定位置开始到指定位置结束截取字符串。
```java
System.out.println(s.substring(3, 6));      // low
```

> `String substring(int start, int end)` 包含 start 不包含 end。

# 转换功能
```java
String s = "JavaSE";
```
## 1. 字符串转为字节数组
`byte[] getBytes()` 把字符串转为字节数组。
```java
byte[] bys = s.getBytes();
for (int x = 0; x < bys.length; x++) {
    System.out.print(bys[x]);       // 7497118978369
}
```
## 2. 字符串与字符数组互转
`char[] toCharArray()` 把字符串转换成字符数组。
```java
char[] chs = s.toCharArray();
for (int x = 0; x < chs.length; x++) {
   System.out.print(chs[x]);       // JavaSE
}
```
> 实际为：[‘J’, ‘a’, ‘v’, ‘a’, ‘S’, ‘E’]

`String valueOf(char[] chs)` 把字符数组转成字符串。

```java
String ss = String.valueOf(chs);
System.out.println(ss);     // JavaSE
```
## 3. `int` 类型转为字符串
`String valueOf(int i)` 把 int 类型的数据转成字符串。
```java
int i = 100;
String s = String.valueOf(i);
System.out.println(s);      // 100
```
> 此时的 100 是一个字符串，而不是 int。

## 4. 大小写转换
`String toLowerCse()` 把字符串转成小写。
```java
System.out.println(s.toLowerCase());    // javase
System.out.println(s);      // JavaSE
```
> **注意：** s.toLowerCase() 并未改变原来的。

`String toUpperCase()` 把字符串转成大写。
```java
System.out.println(s.toUpperCase());    // JAVASE
```
> `String` 类的 `valueOf` 方法可以把任意类型数据转成字符串。

## 5. 拼接
`String concat(String str)` 把字符串拼接。
```java
System.out.println(s.concat(" 和 JavaEE"));     // JavaSE 和 JavaEE
String s1 = "hello";
String s2 = "world";
String s3 = s1 + s2;
String s4 = s1.concat(s2);
System.out.println(s3);     // helloworld
System.out.println(s4);     // helloworld
```

# 其他功能
## 1. 替换功能
`String replace(char old, char new)` 将指定字符替换为新的字符。
`String replace(String old, String new)` 将指定字符串替换为新的字符串。

```java
String s1 = "helloworld";
String s2 = s1.replace('l', 'k');
String s3 = s1.replace("owo", "ak47");
System.out.println(s1);     // helloworld
System.out.println(s2);     // hekkoworkd
System.out.println(s3);     // hellak47rld
```
## 2. 去除字符串两端的空格
`String trim()`
```java
String s4 = " hello world ";
String s5 = s4.trim();
System.out.println("---" + s4 + "---");     // --- hello world ---
System.out.println("---" + s5 + "---");     // ---hello world---
```

## 3. 遍历获取字符串中的每一个字符
```java
String s = "helloworld";

for (int i = 0; i < s.length(); i++) {
    System.out.print(s.charAt(i));      // helloworld
}
```
## 4. 反转字符串
```java
String s = "abc";

String result = "";     // 定义一个新的字符串

char[] chs = line.toCharArray();    // 把字符串转成字符数组
for (int x = chs.length - 1; x >= 0; x--) {     // 倒着遍历字符串，得到每一个字符
    result += chs[x];
}
System.out.println(result);     // cba
```