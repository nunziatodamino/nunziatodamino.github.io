We show in this note that the [[Dirac equation for a charged particle]] satisfies a continuity equation.Let's start with the Dirac equation

$$
i\hbar\partial_t\Psi  
=\left[  
c\hat{\bar\alpha}\cdot(\hat{\bar p}-q\bar A)  
+\hat\beta mc^2  
+q\Phi\mathbb 1_4  
\right]\Psi \tag{1}
$$

Where we recall that

$$  
\Psi=(\Psi_1,\Psi_2,\Psi_3,\Psi_4)^T\in\mathbb{C}^4.  
$$

Let's take the adjoint of (1) step by step, by first rewriting it expanded:

$$  
\begin{aligned}  
i\hbar\partial_t\Psi  
={}&-i\hbar c\sum_i\hat\alpha_i\partial_i\Psi  
-cq\sum_i\hat\alpha_i A_i\Psi  
+q\Phi\Psi  
+mc^2\hat\beta\Psi .  
\end{aligned}  
$$

- I) $(i\hbar\partial_t\Psi)^\dagger =-i\hbar(\partial_t\Psi)^\dagger =-i\hbar\partial_t\Psi^\dagger$
- II) $\begin{aligned} \left(-i\hbar c\sum_i\hat\alpha_i\partial_i\Psi\right)^\dagger &=i\hbar c\sum_i(\partial_i\Psi)^\dagger\hat\alpha_i^\dagger = i\hbar c\sum_i(\partial_i\Psi)^\dagger\hat\alpha_i^\dagger = \\&=i\hbar c\sum_i\partial_i\Psi^\dagger\hat\alpha_i =i\hbar c(\bar\nabla\Psi^\dagger\cdot\hat{\bar\alpha}) \end{aligned}$
- III) $\begin{aligned}\left(-cq\sum_i\hat\alpha_iA_i\Psi\right)^\dagger&=-cq\sum_iA_i\Psi^\dagger\hat\alpha_i =-cq(\bar A\Psi^\dagger\cdot\hat{\bar\alpha}) .\end{aligned}$
- IV + V) $\left[(q\Phi+mc^2\hat\beta)\Psi\right]^\dagger=q\Phi\Psi^\dagger+mc^2\Psi^\dagger\hat\beta .$

So in the end the adjoint is

$$  
\begin{aligned}  
-i\hbar\partial_t\Psi^\dagger  
={}&i\hbar c,\bar\nabla\Psi^\dagger\cdot\hat{\bar\alpha}  
-cq,\bar A,\Psi^\dagger\cdot\hat{\bar\alpha}+q\Phi\Psi^\dagger  
+mc^2\Psi^\dagger\hat\beta .  
\end{aligned}  
\tag{2}  
$$

In order to continue we consider $\Psi^\dagger(1)-(2)\Psi$.
This leads to

$$  
\partial_t(\Psi^\dagger\Psi)  
+\bar\nabla\cdot\left(\Psi^\dagger c\hat{\bar\alpha}\Psi\right)=0 .  
$$

We define hence:

$$  
\rho(\bar r,t)\equiv\Psi^\dagger(\bar r,t)\Psi(\bar r,t)  
\qquad  
\bar J(\bar r,t)\equiv\Psi^\dagger(\bar r,t)c\hat{\bar\alpha}\Psi(\bar r,t),  
$$

(Note that this definition of $\rho$, makes it $\rho(\bar r, t) \geq 0, \forall \bar r, t$) Leading to a continuity equation:

$$  
\partial_t\rho  
+\bar\nabla\cdot\bar J=0 .  
$$

Then, given that $\rho(\bar r, t) \geq 0, \forall \bar r, t$ and due to the continuity equation is locally conserved, this lead to the fact the $\rho$ is a good density probability candidate, fixing the problem in the [[The Klein-Gordon equation|Klein-Gordon ansatz]]
