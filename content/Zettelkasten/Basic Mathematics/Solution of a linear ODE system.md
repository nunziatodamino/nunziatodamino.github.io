Suppose to have the following linear ODE system:

$$ \dot{\bar{x}}(t) =A\bar{x}(t) \qquad \iff \qquad \begin{cases} \dot{x}_1(t) =a_{11}x_1(t)+ \dots + a_{1n}x_n(t) \\ \dot{x}_2(t) = a_{21}x_1(t)+ \dots+a_{2n} x_n(t) \\ \vdots \\ \dot{x}_n(t) = a_{n1}x_1(t)+ \dots+a_{nn} x_n(t) \\ \end{cases} $$

Note that this system is an [[Autonomous system]].
Considering the matrix $A$ to be a constant matrix the system can be easily solved by proposing the following solution:

$$ \bar{x}(t) = \bar{C}e^{\lambda t} $$

Upon substitution in the system, this leads to :

$$\bar{C}\lambda e^{\lambda t} =A\bar{C}e^{\lambda t} \qquad \iff \qquad A-\lambda\mathbb{1} =0$$

Which is an eigenvalue equation. 
Now we state a result without proving it:

>[!info] **Solution of a linear homogeneous system of ODE (non-degenerate case)**
>Let's consider the ODE system $\dot{\bar{x}}(t) =A\bar{x}(t)$, where $A$ is a square matrix of order n.
>Suppose the matrix $A$ has $n$ distinct eigenvalues $\lambda_1, \lambda_2, \dots, \lambda_n$ and $n$ distinct eigenvectors $\bar{C}_1,\bar{C}_2, \dots, \bar{C}_n$. Then the system solution is:
 >
 $$\bar{x}_{tot} = \sum_{i=1}^n \bar{C}_ie^{\lambda_i t}$$

The degenerate case has to be treated separately.
==Note that this can happen only if all the eigenvalues are distinct and real, or distinct and complex.
This condition can be summed in the statement that $A$ must be diagonalizable ==
