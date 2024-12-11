Let's try to study the diffusion problem in 1 dimension by using a microscopic approach.

Note that a diffusion process in 1D is a random walk.

We consider the following system:

![[Images/Diffusion_1d.png|400]]

The particle is found at position $x_i = i l$ at a discrete time $t_n = n \Delta t$.

One chooses as starting position an index $i_0$, so that the position is $x_{i_0}$, at time $t_0=0$

Let's evaluate the probability that the particle can be found in the position $x_{i}$ at the time $t_{1}$, given the fact that in the previous time $t_0$ the particle is in the position $x_{i_0}$.

One can prove ([[Evaluation of the discrete master equation for the diffusion process in 1D|here]]) that:

$$ w_{j}(t_{n}) = P_{-}w_{j+1}(t_{n-1}) + P_{+}w_{j-1}(t_{n-1})$$

Or as is usually written

>[!info] **Discrete master equation for a 1D diffusion process**
>$$ w_{i}(t_{n+1}) = P_{-}w_{i+1}(t_{n}) + P_{+}w_{i-1}(t_{n})$$

Where $P_{-}$ is the probability that the particle goes to the left, while $P_{+}$ is the probability that the particle goes to the right.
This is a type of discrete master equation, which more generally can be written as:

$$ w_{i}(t_{n+1}) = \sum_j W_{ij}\ w_{j}(t_{n}) $$

Where $W_{ij}$ are matrix elements that contains for each element the probability of a jump from index $i$ to index $j$  at the time $t_{n+1}-t_n=\Delta t$, namely:

$$W_{ij}\equiv W_{ij}(\Delta t) =  \mathbb{P}(il-jl,\Delta t) \equiv W(il-jl,\Delta t)=W(jl,\Delta t|il,0) $$

For this reason the matrix $W$ is called transition matrix.
If consider a vectorial form, i.e $\bar{w}(t_{n})=(\dots w_{-1}(t_{n}), w_{0}(t_{n}), w_{1}(t_{n}), \dots)^t$, we can write:

$$\bar{w}(t_{n})=W\bar{w}(t_{n-1})=W(W\bar{w}(t_{n-2}))=\dots W^n\bar{w}(t_{0})$$

So that all the dynamics depends from the matrix $W$ and initial conditions $\bar{w}(t_{0})$.
Specifically one can write:

$$(W^n)_{ij} = \mathbb{P}(il-jl,n\Delta t)\equiv W(il-jl,n\Delta t)=W(jl,n\Delta t|il,0)$$

This let us rewrite the master equation in the suggestive form:

>[!info] **Discrete master equation - propagator form**
$$ w_{i}(t_{n}) = \sum_j W(jl,n\Delta t|il,0)\ w_{j}(0) $$
>
Where one has to fix the initial condition in order to write the solution. Generally one considers:
>
$$w_{i}(0)=\delta_{i0}$$
>
I.e. all particles starts from the origin

This form will be useful in the continuum limit generalization. 
Notice also that:

$$ 1=\sum_iw_{i}(t_{n+1}) = \sum_i\sum_j W_{ij}\ w_{j}(t_{n+1})= \sum_j \left(\sum_iW_{ij}\right)\ w_{j}(t_{n+1}) \qquad \iff \qquad\sum_iW_{ij} = 1 $$

Moreover, by returning to our original problem, is easy to see that, for a diffusion problem in 1D, the transition matrix has elements:

$$ W_{ij} = P_{-}\delta_{i,j-1}+P_{+}\delta_{i,j+1} $$

For its resolution we refer to note : [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Diffusion process in 1D - solution of the discrete master equation]]
