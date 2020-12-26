#include <bits/stdc++.h>
using namespace std;

void solve(string ip, string op)
{
    if (ip.empty())
    {
        cout << op << endl;
        return;
    }

    for (int i = 0; i < ip.length(); i++)
    {
        string ip1 = "";
        for (int j = 0; j < ip.length(); j++)
        {
            if (i == j)
                continue;
            ip1 += ip[j];
        }
        solve(ip1, op + ip[i]);
        // cout<<ip1<<endl;
    }
}

int main()
{
    string ip;
    cin >> ip;
    string op = "";
    solve(ip, op);
}
