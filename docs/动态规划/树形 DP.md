# 树形 DP

## 模版

```c++
#include <bits/stdc++.h>
using namespace std;

const int N=6005;
vector<int> G[N];
int f[N][2];
void dfs(int u)
{
	for(auto v:G[u])
	{
		dfs(v);
		f[u][0]+=max(f[v][0],f[v][1]);
		f[u][1]+=f[v][0];
	}
}
bool t[N];
int main()
{
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	int n;
	cin>>n;
	for(int i=1;i<=n;i++)
	{
		cin>>f[i][1];
	}
	for(int i=1;i<n;i++)
	{
		int u,v;
		cin>>u>>v;
		G[v].push_back(u);
		t[u]=1;
	}
	int r;
	for(int i=1;i<=n;i++)
	{
		if(!t[i])r=i;
	}
	dfs(r);
	cout<<max(f[r][0],f[r][1])<<'\n';
	return 0;
}
```

## 例题

### P1352 没有上司的舞会

```c++
#include <bits/stdc++.h>
using namespace std;

const int N=6005;
vector<int> G[N];
int f[N][2];
void dfs(int u)
{
	for(auto v:G[u])
	{
		dfs(v);
		f[u][0]+=max(f[v][0],f[v][1]);
		f[u][1]+=f[v][0];
	}
}
bool t[N];
int main()
{
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	int n;
	cin>>n;
	for(int i=1;i<=n;i++)
	{
		cin>>f[i][1];
	}
	for(int i=1;i<n;i++)
	{
		int u,v;
		cin>>u>>v;
		G[v].push_back(u);
		t[u]=1;
	}
	int r;
	for(int i=1;i<=n;i++)
	{
		if(!t[i])r=i;
	}
	dfs(r);
	cout<<max(f[r][0],f[r][1])<<'\n';
	return 0;
}
```

### P3478 [POI2008] STA-Station

```c++
#include <bits/stdc++.h>
using namespace std;

using ll=long long;
const int N=1000005;
vector<int> G[N];
int fa[N],siz[N],dep[N];
ll f[N];
void dfs1(int u)
{
	siz[u]=1;
	dep[u]=dep[fa[u]]+1;
	f[1]+=dep[u];
	for(auto v:G[u])
	{
		if(v==fa[u])continue;
		fa[v]=u;
		dfs1(v);
		siz[u]+=siz[v];
	}
}
void dfs2(int u)
{
	for(auto v:G[u])
	{
		if(v==fa[u])continue;
		f[v]=f[u]-siz[v]*2+siz[1];
		dfs2(v);
	}
}
int main()
{
	ios::sync_with_stdio(false);
	cin.tie(nullptr);
	int n;
	cin>>n;
	for(int i=1;i<n;i++)
	{
		int u,v;
		cin>>u>>v;
		G[u].push_back(v);
		G[v].push_back(u);
	}
	dfs1(1);
	dfs2(1);
	int mx=1;
	for(int i=2;i<=n;i++)
	{
		if(f[i]>f[mx])mx=i;
	}
	cout<<mx<<'\n';
	return 0;
}
```
