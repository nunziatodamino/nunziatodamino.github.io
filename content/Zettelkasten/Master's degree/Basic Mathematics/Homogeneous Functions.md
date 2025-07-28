#### 1. One-Dimensional Case

Let $I\subseteq\mathbb{R}$ be an interval and let $f:I\to\mathbb{R}$.

>[!info] **Definition 1.1 (Degree $k$ Homogeneity).**  
>$$
 f(\lambda x)=g(\lambda)f(x)=\lambda^k f(x)$$
>One can prove that $g(\lambda)=\lambda^k$ is the only possible choice.

>[!info] **Property 1.2 (Products and Quotients).**  
>$$
 f\cdot g\text{ is homogeneous of degree }k+m,\quad f/g\text{ is homogeneous of degree }k-m.
$$

>[!info] **Derivatives (One-Dimensional).**  
>$$
 f^{(n)}(\lambda x)=\lambda^{k-n} f^{(n)}(x)$$
>so in particular $f'$ is homogeneous of degree $k-1$.

#### 2. Multivariate Case ($\mathbb{R}^d$)

Let $U\subseteq\mathbb{R}^d$ be star-shaped about the origin, $x \in U$, $\lambda \in \mathbb{R}^d | \lambda x\in U$ and $f:U\to\mathbb{R}$.

>[!info] **Definition 2.1 (Degree $k$ Homogeneity).**  
>$$
 f(\lambda x)=\lambda^k f(x).
$$

>[!info] **Euler’s Theorem (First-Order).**  
>$$
 x \cdot \nabla f(\lambda x)=\sum_{i=1}^d x_i \frac{\partial f}{\partial x_i}(x)=k f(x).
$$
#### 3. Generalized (Quasi-) Homogeneous Functions

Let $x=(x_1,\dots,x_d)$ and let $w=(w_1,\dots,w_d)$ be a vector of positive weights.

>[!info] **Definition 3.1 (Generalized Homogeneity).**  
>$$
 f(\lambda^{w_1}x_1,\dots,\lambda^{w_d}x_d)=\lambda f(x_1,\dots,x_d).
$$

- Examples  
1. $f(x,y)=x^2y^3$ is weighted-homogeneous of degree with weights $w=(1/2,1/3)$.  

##### Observation
Note that $\lambda$ can be anything. Consider than the 2 variable case:

$$ f(\lambda^ax,\lambda^by)= \lambda f(x,y) $$

If we consider $\lambda = y^{-\frac{1}{b}}$ then:

$$ f(y^{-\frac{a}{b}}x,1)= y^{-\frac{1}{b}} f(x,y) \iff f(x,y) = y^{\frac{1}{b}}f(y^{-\frac{a}{b}}x,1) $$

I.e. we can recast a quasi-homogeneous function in 2 variables just through the ratio $y^{-\frac{a}{b}}x = \frac{x}{y^{\frac{a}{b}}}$
Similarly we can choose $\lambda = x^{-1/a}$ to accomplish the same.