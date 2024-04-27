Suppose to have an [[Autonomous system|autonomous system]]:

$$ \dot{\bar{x}}(t) = f(\bar{x}) $$

And to consider one of its equilibrium point $\bar{x}^*$. We know that by definition $\dot{\bar{x}}^*(t) = 0 \to f(\bar{x}^*)=0$
We now expand the function around the equilibrium point by discarding terms over the second order:

$$f(\bar{x})=f(\bar{x}^*)+\frac{\partial f}{\partial\bar{x}}_{|\bar{x}=\bar{x}^*}(\bar{x}-\bar{x}^*)  + o(\bar{x}-\bar{x}^*)^2 = \frac{\partial f}{\partial\bar{x}}_{|\bar{x}=\bar{x}^*}(\bar{x}-\bar{x}^*)  + o(\bar{x}-\bar{x}^*)^2 $$

The partial derivative in the above equation is to be interpreted as the Jacobian matrix for the autonomous system function $f$, namely, if we have $f=(f_1,f_2,\dots,f_n)$ and $\bar{x}= (x_1,x_2,\dots,x_n)^t$ then the Jacobian matrix is:

$$\frac{\partial f}{\partial\bar{x}} \equiv J = \begin{Vmatrix} \frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} &\dots& \frac{\partial f_1}{\partial x_n} \\  \frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} &\dots& \frac{\partial f_2}{\partial x_n} \\
\vdots & & & \vdots \\
 \frac{\partial f_n}{\partial x_1} & \frac{\partial f_n}{\partial x_2} &\dots& \frac{\partial f_n}{\partial x_n} \\
\end{Vmatrix}$$

While with $J(\bar{x}^*)$ we will indicate the Jacobian evaluated at the equilibrium point. We then obtain for our system:
 $$\dot{\bar{x}}(t) = f(\bar{x})  \qquad \Rightarrow \qquad  \dot{\bar{x}}(t) = J(\bar{x}^*)(\bar{x}-\bar{x}^*) \qquad \forall \bar{x}\in B (\bar{x}^*,\rho)  $$

So that we see that in the neighborhood of an equilibrium point the system greatly simplifies.
If we now call $\delta\bar{x} = \bar{x}-\bar{x}^*$, and evaluate the system in the neighborhood of the equilibrium point, we obtain:

$$\delta\dot{\bar{x}} = J(\bar{x}^*)\delta\bar{x} \qquad \iff \qquad \delta \dot{x}_i = \sum_i J^*_{ij}\delta x_i \qquad j=1,2,\dots, n$$

Which are $n$ linear ODE's of the first order. By [[Solution of a linear ODE system|ODE theory]] this system has solution:

$$\delta\bar{x} = \sum_i \bar{C}_i e^{\lambda_it}$$

Where $\bar{C}_i$ and $\lambda_i$ are respectively the eigenvectors and the eigenvalues of the matrix $J(\bar{x}^*)$.

Now, if this solution tends to $0$ as $t\to +\infty$, we can imply that the equilibrium point is [[Stability definition for autonomous systems|exponentially stable]] (in the definition one has to choose $\bar{x}=\bar{x}^*$ and $\bar{y}=\bar{x}^*+\delta\bar{x}$).
So we can state the following criterion:

>[!info] **Asymptotic stability criterion for an equilibrium point of an autonomous system**
>Given an autonomous system, one of its equilibrium point $\bar{x}^*$ is exponentially stable (or linearly stable) if all the eigenvalues of the Jacobian matrix of the system evaluated in the equilibrium point are real and negative.

==Moreover the principal idea here is that given a generic autonomous system one can try to check if an equilibrium solution is linearly stable by trying to expand the system in a neighborhood of the equilibrium point, instead of resorting to the more general method of the construction of a Lyapunov function==
