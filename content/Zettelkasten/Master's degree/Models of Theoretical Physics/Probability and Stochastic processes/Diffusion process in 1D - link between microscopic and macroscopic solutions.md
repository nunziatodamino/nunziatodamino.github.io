
Suppose we want to link [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Diffusion process in 1D - microscopic description]] to [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Diffusion process in 1D - macroscopic description]], given the fact that in principle they describe the same phenomenon.
We begin by recalling the results found in the microscopic approach discussion, specifically:

$$ \braket{x_i} = nl(P_{+} - P_{-}) \qquad  \text{Var}(x_{i})= 4l^2nP_{+}P_{-}  $$

We now analyze an extremely specific case: $P_{-}=P_{+}=\frac{1}{2}$, so that :

$$ \braket{x_i}_{t_{n}} = 0 \qquad  \text{Var}(x_{i})_{t_{n}}= nl^2 = \frac{l^2}{\Delta t} t_n  $$

As we used that $t_n = n\Delta t$.
A meaningful limit is obtained by letting $l \to 0$ and $\Delta t \to 0$, and thus $n \to +\infty$ while the fraction $\frac{l^2}{\Delta t}\equiv 2D$ remains constant.  Note that is implicit that the time is fixed, considering how the variance was evaluated.  
Then the time from a discretized variable becomes a continuous one and we can drop the index, and the same consideration will apply to the $x_{i}$. 
So we will obtain in the end:

$$ \text{Var}(x)_{t}= 2Dt  $$

Now we would like to prove that also also the solution of the master equation found in the microscopic approach converges to a solution of the diffusion equation in this limit.
We begin by recalling the distribution we obtained:

$$  w_i(t_n)= \begin{cases}{n\choose n_+}P_{+}^{\frac{n+i}{2}}P_{-}^{\frac{n-i}{2}}\qquad\text{if}\ n_+\ \text{is even}\\
0\qquad\qquad\qquad\quad\ \ \text{if}\ n_+\ \text{is odd}\\
\end{cases}  $$

First we consider only the even case where $P_{-}=P_{+}=\frac{1}{2}$ :

$$  w_i(t_n)= {n\choose n_+}P_{+}^{\frac{n+i}{2}}P_{-}^{\frac{n-i}{2}} = {n\choose \frac{n+i}{2}}\frac{1}{2^n} =\frac{n!}{\left(\frac{n+i}{2}\right)!\left(\frac{n-i}{2}\right)!} \frac{1}{2^n} $$

After some consideration made [[Continuum limit of the diffusion equation_231015_173337.pdf|here]], we obtain in the end:

$$w_i(t_n) = \sqrt{\frac{2}{\pi n}} e^{-\frac{i^2}{2n}} $$

Some observation are now in order. First we observe that $w_i(t_n)>0$, is Gaussian-like and, more importantly, is still a probability mass function, while in the continuum limit I expect to have a probability density function.
One can [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Passage from diffusion PMF to diffusion PDF|show]] that:

$$ \frac{\Delta x}{2l}w_i(t_n) = W(x,t)\Delta x \qquad \iff \qquad w_i(t_n) = {2l}W(x,t) $$

We are now ready to convert our pmf in a pdf:

$$W(x,t)=\frac{1}{2l}w_i(t_n) = \sqrt{\frac{1}{2\pi nl^2}} e^{-\frac{i^2}{2n}} $$

If we recall that $x=il$ and $t=n\Delta t$, then:

$$W(x,t)=\sqrt{\frac{1}{2\pi t\frac{l^2}{\Delta t}}} e^{-\frac{x^2}{2t\frac{l^2}{\Delta t}}} = \sqrt{\frac{1}{4\pi D t}} e^{-\frac{x^2}{4Dt}}  $$

One can generalize this by considering a starting point $x_0$ and a starting time $t_0$by using the modified formula:

$$W(x,t) = \sqrt{\frac{1}{4\pi D (t-t_0)}} e^{-\frac{(x-x_0)^2}{4D(t-t_0)}}  $$

==One of the most remarkable feature of this result is that is a particular case of the central limit theorem==.
We show this [[Zettelkasten/Master's degree/Models of Theoretical Physics/Probability and Stochastic processes/Diffusion process in 1D - a particular case of Central limit theorem|here]].
