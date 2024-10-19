# 最长上升子序列（Longest Increasing Subsequence）

## 模版

### 二分搜索

```cpp
#include <bits/stdc++.h>
using namespace std;

using ll=long long;
const int inf=0x3f3f3f3f;
const int mod=1e9+7;
const int N=5005;
int a[N],b[N];
int main()
{  
	int n;
	cin>>n;
	for(int i=1;i<=n;i++)cin>>a[i];
	fill(b+1,b+n+1,inf);
	int ans=0;
	for(int i=1;i<=n;i++)
	{
		int j=lower_bound(b+1,b+n+1,a[i])-b;
		ans=max(ans,j);
		b[j]=a[i];
	}
	cout<<ans<<'\n';
	return 0;
}
```

### 树状数组

```cpp
#include <bits/stdc++.h>
using namespace std;

const int N=1000005;
int a[N],c[N];
void update(int u,int v)
{
	while(u<N)
	{
		c[u]=max(c[u],v);
		u+=u&-u;
	}
}
int query(int u)
{
	int res=0;
	while(u)
	{
		res=max(res,c[u]);
		u-=u&-u;
	}
	return res;
}
int main()
{
	int n;
	cin>>n;
	for(int i=1;i<=n;i++)
	{
		cin>>a[i];
	}
	int ans=0;
	for(int i=1;i<=n;i++)
	{
		int k=query(a[i]-1)+1;
		update(a[i],k);
		ans=max(ans,k);
	}
	cout<<ans<<'\n';
	return 0;
}
```

## 例题

### B3637 最长上升子序列

```cpp
#include <bits/stdc++.h>
using namespace std;

using ll=long long;
const int inf=0x3f3f3f3f;
const int mod=1e9+7;
const int N=5005;
int a[N],b[N];
int main()
{  
	int n;
	cin>>n;
	for(int i=1;i<=n;i++)cin>>a[i];
	fill(b+1,b+n+1,inf);
	int ans=0;
	for(int i=1;i<=n;i++)
	{
		int j=lower_bound(b+1,b+n+1,a[i])-b;
		ans=max(ans,j);
		b[j]=a[i];
	}
	cout<<ans<<'\n';
	return 0;
}
```

