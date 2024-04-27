
We begin by saying that in general the complex analysis can be built in 2 different ways, one based on the concept of holomorphic function, and one based on the concept of analytical function.
These 2 ways of building are equivalent, because:

>[!NOTE] $$ f(z)\ \mbox{is holomorphic in}\ z_0 \iff f(z)\ \mbox{is analytic in}\ z_0 $$

We will build our theory on the concept of holomorphy, i.e. the fact that a complex function is derivable in a point or not.

First we begin on stating a condition equivalent to holomorphy:

>[!NOTE] **The Cauchy-Riemann conditions**
>
>Hp. Let $A \subseteq \mathbb{C}$ an open set, $f:A \to \mathbb{C}\ :\ f(z) = u(x,y) + i v(x,y)$ a function, and $z_0 \in A\ :\ z_0=x_0+iy_0$
>
>Th. 
>
>$$ f(z)\ \mbox{is holomorphic in}\ z_0 \iff 
\begin{cases}
\mbox{u(x,y) and v(x,y) are differentiable in}\ (x_0,y_0) \\
\partial_x u = \partial_y v\  \wedge \partial_yv  =- \partial_xu \qquad \mbox{in}\ (x_0,y_0)
\end{cases} $$

Now we state another important property for holomorphic function

> [!NOTE] **The Cauchy formula**
> 
> Hp. Let $A \subseteq \mathbb{C}$ an open set, $f:A \to \mathbb{C}$, with $f$ holomorphic in $A$
> Th. We can imply that $f \in C^{\infty}(A)$, moreover it holds the representation formula
>
> $$ f^{(n)}(z) = \frac{n!}{2 \pi i} \int_{+\partial A} \frac{f(\xi)}{(\xi-z)^{n+1}} d\xi \qquad \forall z \in \mathring{A}$$

Now we recall briefly that a function is an analytic function in $z_0$ if for definition it admits an expansion in power series in a neighborhood of $z_0$.
But in general, in the complex plane, a more general version of expansion is more often considered, the so called Laurent series representation.
We state now its necessary condition.

> [!NOTE] **The Laurent series expansion theorem**
>
> Hp. Let $C_{R_1,R_2}(z_0) \subseteq \mathbb{C}$ be a circular crown of center $z_0$ and radii $0<R_1<R_2$. Let also $f:C_{R_1,R_2}(z_0) \to \mathbb{C}$ be a function holomorfic in $C_{R_1,R_2}(z_0)$.
> Th. There 
> 
> $$\exists! a_n \in \mathbb{C}\ (n \in \mathbb{Z}): f(z)= \sum_{n=-\infty}^{+\infty} a_n(z-z_0)^n \qquad \forall z\in C_{R_1,R_2}(z_0)$$
>  
> Moreover these coefficients can be evaluated by the formula:
> 
> $$a_n = \frac{1}{2\pi i} \int_{+\gamma_{\rho}} \frac{f(\xi)}{(\xi-z_0)^{n+1}} d\xi \qquad n \in \mathbb{Z}$$
> Where $\gamma_{\rho} = \partial B(z_0, \rho), \ \rho: R_1<\rho<R_2$.

Note that, by definition, we will call the coefficient $a_{-1}$ in the Laurent series expansion residue of the function in $z_0$. 

