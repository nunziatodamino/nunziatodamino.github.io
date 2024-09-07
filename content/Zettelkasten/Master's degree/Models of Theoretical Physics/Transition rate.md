The idea of transition rate is useful in order to make the [[Zettelkasten/Master's degree/Models of Theoretical Physics/Chapman-Kolmogorov equation]] from a non-linear equation to a linear equation. Note that this idea is not always applicable and it depends on the existence of the limits that we will introduce at the end of the note.

We want to see what happens to the probability when only a small amount of time $\Delta t$ passes, namely we want to evaluate:

$$ \mathbb{P}(m,t|m',t-\Delta t) $$

If $m=m'$ we can expect that nothing is changed if $\Delta t \to 0$, and the particle hasn't moved, so that the probability is about $1$. For the same reasoning if $m \neq m'$ the probability should be about 0. Every remaining term is of the order of $\Delta t$:

$$  \mathbb{P}(m,t|m',t-\Delta t) \Rightarrow\quad\text{when}\ \Delta t \downarrow 0 \quad \Rightarrow 
\begin{cases}
1  \qquad \text{if}\ m=m' \\
0 \qquad \text{if}\ m\neq m' \\
\end{cases}$$

Now we we relax the condition on $\Delta t$ and choose it $\Delta t \simeq 0$, but still big enough that the system can perform at least one transition. Then the probability will be of order $\mathcal{O}(\Delta t)$, specifically:

$$  \mathbb{P}(m,t|m',t-\Delta t) \Rightarrow\quad\text{when}\ \Delta t \simeq 0 \quad \Rightarrow 
\begin{cases}
1 +\mathcal{T}_t(m|m)\Delta t+ \mathcal{O}(\Delta t^2) \qquad \text{if}\ m=m' \\
\mathcal{T}_t(m|m')\Delta t + \mathcal{O}(\Delta t^2) \qquad \text{if}\ m\neq m' \\
\end{cases}$$

Where we have defined $\mathcal{T}_t(m|m')\Delta t$ as the probability that the system changes from state $m'$ to state $m$ in a timestep $\Delta t$, and we will call $\mathcal{T}_t(m|m')$ transition rate. 

Notice that we use the sub-index $t$ to denote the fact that the transition rate is an explicit function of time. When the said index will be omitted we indicate that the transition rate is not an explicit function of time (case of an homogeneous Markov's process).

We can write the expression above in a more compact form as:

$$  \mathbb{P}(m,t|m',t-\Delta t) = \delta_{mm'} +\mathcal{T}_t(m|m')\Delta t + \mathcal{O}(\Delta t^2)$$

Now we can write a proper definition of transition rate:

>[!info] **Transition rate**
>Given a Markov's process we define transition rate the following limit:
>
>$$ \lim_{\Delta t \downarrow 0} \frac{  \mathbb{P}(m,t|m',t-\Delta t)}{\Delta t} = \mathcal{T}_t(m|m')  \qquad \text{if}\ m\neq m'$$
>
>$$ \lim_{\Delta t \downarrow 0} \frac{  \mathbb{P}(m,t|m,t-\Delta t)-1}{\Delta t} = \mathcal{T}_t(m|m)  \qquad \text{if}\ m=m'$$
>
>Notice that these limits are not guaranteed to exists

(Source for this definition Kleinrock Vol 1, also see: https://math.stackexchange.com/questions/3186771/understanding-the-meaning-of-transition-rates-in-a-ctmc).


One important observation is also that $\mathcal{T}_t(m|m') \neq \mathcal{T}_t(m'|m)$ in general.

Finally we notice that the transition rate has dimensions of 1/time, must be positive but not normalized, because is not a probability. In fact is easy to see:

$$\sum_{m\in E}\mathcal{T}_t(m|m')\Delta t =1 \quad \iff \quad \sum_{m\in E}\mathcal{T}_t(m|m') = \frac{1}{\Delta t} \quad \iff \quad \sum_{m\in E:m\neq m'}\mathcal{T}_t(m|m') = \frac{1}{\Delta t}- \mathcal{T}_t(m|m) $$
