We start by restating the master equation:

$$w_{i}(t_{n+1}) = P_{-}w_{i+1}(t_{n}) + P_{+}w_{i-1}(t_{n})$$

We set $n_+$ as the number of steps that the particle does to the right, $n_-$ as the number of steps that the particle does to the left, so that the total number of steps is $n=n_-+n_+$ , where $n$ is the same as the time discretisation $t_n=n\Delta t$.  Moreover the position index will be given by $i=n_+-n_-$.
From this we can write:

$$ n_{+} = \frac{n+i}{2} \qquad n_{-} = \frac{n-i}{2} $$

One can prove that the solution of this discrete master equation is:

>[!info] **Solution of the discrete master equation for a 1D diffusion problem**
>
>$$ w_i(t_n)= \begin{cases}{n\choose n_+}P_{+}^{n_+}P_{-}^{n_{-}}={n\choose \frac{n+i}{2}}P_{+}^{\frac{n+i}{2}}P_{-}^{\frac{n-i}{2}}\qquad \text{if n and i have the same parity (or n and}\ n_{+}\text{)}\\
0 \qquad\qquad\qquad\qquad\qquad\qquad\qquad\  \text{otherwise}
\end{cases} 
$$ 


Which is a [[Binomial probability distribution]], that we know describes the probability of $n_{+}$ successes over $n$ trials.
Note that in this framework the random variable of the distribution is $n_{+}$, but we are interested in $x_i$, so we want to define $x_i$ as a random variable that is function of $n_{+}$.

We have easily that the final position will the length times the position index

$$ x_{i}=li=(n_{+}-n_{-})l = (2n_{+}-n)l  $$

So that, if we want to know the mean position:

$$ \braket{x_i} = (2\braket{n_{+}}-n)l $$

Is extremely easy to evaluate $\braket{n_{+}}$, as is a mean of a binomial distribution $\braket{n_{+}}=nP_{+}$, so that, in the end:

$$ \braket{x_i} = (2nP_{+}-n)l=nl(2P_{+}-1) = nl(P_{+} + P_{+}-1) = nl(P_{+} - P_{-})  $$

Now we evaluate the variance of $x_i$. Recalling that $\text{Var}(x)=\braket{x^2}-\braket{x}^2$, we begin by evaluating the second moment:

$$ \braket{x_{i}^2}= \braket{(2n_{+}-n)^2l^2}= l^2\braket{4n^2_{+}-n^2-4nn_{+}}= l^2( 4\braket{n^2_{+}}-4n\braket{n_{+}} -n^2 ) = $$

$$ = l^2( 4\braket{n^2_{+}} \pm 4\braket{n_{+}}^2 -4n\braket{n_{+}} -n^2 ) = l^2(4\text{Var}(n_{+})+4\braket{n_{+}}^2-4n\braket{n_{+}} -n^2 )=  $$

$$ l^2(4\text{Var}(n_{+})+(2\braket{n_{+}}-n)^2) $$

So that one has:

$$ \text{Var}(x_{i})=\braket{x_i^2}-\braket{x_i}^2 =  l^2(4\text{Var}(n_{+})+(2\braket{n_{+}}-n)^2) -l^2(2\braket{n_{+}}-n)^2 =4l^2\text{Var}(n_{+}) $$

That again is trivial given the result proven in the binomial distribution:

$$ \text{Var}(x_{i})=4l^2\text{Var}(n_{+})= 4l^2nP_{+}P_{-} $$

We sum our results in the following

>[!info] **Characteristic values for the 1D diffusion problem distribution(????????)**
>$$\braket{x_i}=\begin{cases}nl(P_{+} - P_{-})\qquad \text{n and i with same parity (or n and}\ n_{+}\text{)}\\ 0 \ \ \ \qquad\qquad\qquad\text{otherwise}\end{cases}$$$$
>\text{Var}(x_{i})=\begin{cases} 4l^2nP_{+}P_{-}\qquad\text{n and i with same parity (or n and}\ n_{+}\text{)}\\ 0 \qquad\qquad\qquad\text{otherwise}\end{cases}$$



## Transition rate

We first begin by introducing the concept of transition rate.

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
Notice that the transition rate has dimensions of 1/time, must be positive but not normalized, because is not a probability.

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

(Source for this definition Kleinrock Vol 1, also see: https://math.stackexchange.com/questions/3186771/understanding-the-meaning-of-transition-rates-in-a-ctmc)