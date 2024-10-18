# 最大公约数（Greatest Common Divisor）

### 欧几里得算法

$\gcd{(a,b)}=\gcd{(b,a\bmod b)}$

```c++
int gcd(int a,int b)
{
	return b==0?a:gcd(b,a%b);
}
```

