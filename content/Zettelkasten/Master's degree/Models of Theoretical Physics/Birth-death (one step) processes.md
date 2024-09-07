A large category of stochastic processes is concerned only with the interaction with neighboring states.

This kind of processes are called historically birth-death processes or also one step processes and are mainly characterized by the following hypothesis on the transition rates:

$$\mathcal{T}_t(n|n') = 0 \qquad \forall n' \neq n \pm 1$$

Meaning that the following two processes are present:

$$
\begin{cases}
n-1  \to n \qquad \text{with transition rate}\ \mathcal{T}_t(n|n-1) \equiv b(n-1) \\
n+1 \to n \qquad \text{with transition rate}\ \mathcal{T}_t(n|n+1) \equiv d(n+1) \\
\end{cases}
$$

This assumption simplifies greatly the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Master equation]] , giving back, considering that now $E$ contains only for a given $n$ the elements: $E=\{ n-1,n,n+1 \}$ :

$$ \partial_t \mathbb{P}(n,t) =  \sum_{n' \in E} \left[\mathcal{T}_t(n|n')\mathbb{P}(n',t)- \mathcal{T}_t(n'|n)\mathbb{P}(n,t)\right] $$

$$ \partial_t \mathbb{P}(n,t) = \mathcal{T}_t(n|n-1)\mathbb{P}(n-1,t)- \mathcal{T}_t(n-1|n)\mathbb{P}(n,t) +\mathcal{T}_t(n|n+1)\mathbb{P}(n+1,t)- \mathcal{T}_t(n+1|n)\mathbb{P}(n,t)  $$

$$ \partial_t \mathbb{P}(n,t) = b(n-1)\mathbb{P}(n-1,t)- d(n)\mathbb{P}(n,t) +d(n+1)\mathbb{P}(n+1,t)- b(n)\mathbb{P}(n,t)  $$

Giving in the end:

>[!info] **Master equation for one-step processes**
$$ \partial_t \mathbb{P}(n,t) = b(n-1)\mathbb{P}(n-1,t) +d(n+1)\mathbb{P}(n+1,t)- (b(n)+d(n))\mathbb{P}(n,t)  $$

