We want to study how particles are arranged in space.
We begin by writing the probability density function that we can find $N$ particles at positions $\bar{r}_1, \dots ,\bar{r}_N$ in the canonical ensemble (NVT):

$$ \mathbb{p}(\bar{r}_1, \dots ,\bar{r}_N) = \frac{1}{N!\mathcal{Q}_N}e^{-\beta W(\bar{r}_1, \dots ,\bar{r}_N)} $$

Note that if the system is homogeneous, then the total potential energy depends only on the relative positions $W(\bar{r}_1, \dots ,\bar{r}_N) = \sum_{i,j | i<j} U(|\bar{r}_i - \bar{r}_j|)$.
Note that due to the [[Projects/Numerical methods for soft matter/Molecular dynamics/Ensemble mean equivalence|Ensemble mean equivalence]], if we are in the thermodynamic limit we can consider this for any ensemble.


> [!info] **Important note** 
> In literature one also find:
>
$$ \mathbb{p}(\bar{r}_1, \dots ,\bar{r}_N) = \frac{1}{N!\mathcal{Z}_N}e^{-\beta W(\bar{r}_1, \dots ,\bar{r}_N)} $$
>
**Note that in this case $\mathcal{Z}_N$ is NOT the partition function, but still the configurational integral $\mathcal{Q}_N$**.
> We recall that in the canonical ensemble the partition function is related to the configurational integral with the relation:
>
$$ \mathcal{Z} = \lambda^{-3N} \frac{1}{N!} \int \dots\int d\bar{r}_1 \dots d\bar{r}_N e^{-\beta W(\bar{r}_1, \dots ,\bar{r}_N)} \equiv \lambda^{-3N} \mathcal{Q}_N $$
>
>Where $\lambda = \sqrt{\frac{h^2}{2m\pi k_B T}}$
>Since structural properties of solids and liquids depends only on $\mathcal{Q}_N$, in textbooks of this nature they are used as synonims.

We now define a set of so called **reduced distribution function**

$$ 
\begin{aligned}
n_1(\bar{x}_1) &= \sum_{i=1}^N \langle \delta(\bar{x}_1 - \bar{r}_i) \rangle \\
n_2(\bar{x}_1, \bar{x}_2) &= \sum_{i,j|i\neq j} \langle \delta(\bar{x}_1 - \bar{r}_i)\delta(\bar{x}_2 - \bar{r}_j)\rangle \\
& \vdots \\
n_s(\bar{x}_1, \dots \bar{x}_s) &= \sum_{i,\dots, m|i\neq \dots\neq m} \langle \delta(\bar{x}_1 - \bar{r}_i)\dots\delta(\bar{x}_s - \bar{r}_m)\rangle \\
\end{aligned}
$$

Each of these functions represent the probability that $s$ particles occupy the positions $\bar{x}_1, \dots \bar{x}_s$ in space.

We begin by showing that in the limit of an homogeneous system the function $n_1(\bar{x}_1)$ is the number density.

### Digressing on $n_1(\bar{x})$

In an homogeneous system the reduced function definition is invariant by the particle choice, so we can choose the first particle and write:

$$n_1(\bar{x}_1) = N \langle \delta(\bar{x}_1 - \bar{r}_1) \rangle$$

Then, by definition of mean, we have :

$$ 
\begin{aligned}
\langle \delta(\bar{x}_1 - \bar{r}_1) \rangle &= \int \dots\int d\bar{r}_1 \dots d\bar{r}_N\mathbb{p}(\bar{r}_1, \dots ,\bar{r}_N)\delta(\bar{x}_1 - \bar{r}_1) = \\ 
&=\int \dots\int d\bar{r}_2 \dots d\bar{r}_N\mathbb{p}(\bar{x}_1,\bar{r}_2 \dots ,\bar{r}_N)
\end{aligned}
$$

Now we consider the following set of change of variables : $\bar{x}_2 = \bar{r}_2 - \bar{x}_1, \ \bar{x}_3 = \bar{r}_3 - \bar{x}_1, \ \dots \bar{x}_j = \bar{r}_j - \bar{x}_1, \ j \neq 1$. Considering that respect to the integral $\bar{x}_1$ is a constant and the transformation is a translation, the Jacobian is one, and we obtain:

$$ 
\begin{aligned}
\langle \delta(\bar{x}_1 - \bar{r}_1) \rangle &= \frac{1}{N!\mathcal{Z}_N}\int \dots\int d\bar{x}_2 \dots d\bar{x}_Ne^{-\beta(\sum_{i<j} V(|\bar{r}_i - \bar{r}_j|))} \equiv \frac{C(\bar{x_2}, \dots, \bar{x}_N)}{N!\mathcal{Z}_N}
\end{aligned}
$$

Where $C(\bar{x_2}, \dots, \bar{x}_N)$ is an expression independent of $\bar{x_1}$ in the case of an homogeneous system (i.e. when $W(\bar{r}_1, \dots ,\bar{r}_N) = \sum_{i,j | i<j} U(|\bar{r}_i - \bar{r}_j|)$.). If we now consider a general expression of the configurational integral:

$$N!\mathcal{Q}_N =  \int \dots\int d\bar{r}_1 \dots d\bar{r}_Ne^{-\beta W(\bar{r}_1, \dots ,\bar{r}_N)} = C(\bar{x_2}, \dots, \bar{x}_N) \int d\bar{r}_1 = CV $$

Finally we can put all together:

$$n_1(\bar{x}_1) = N \frac{C}{N!\mathcal{Q}_N} = N \frac{N!\mathcal{Q}_N}{N!\mathcal{Q}_N} \frac{1}{V} = \rho $$

### Digressing on $n_2(\bar{x}_1,\bar{x}_2)$

In an homogeneous system the reduced function definition is invariant by the particle choice, so we can choose the first particle and second particle and write:

$$n_2(\bar{x}_1, \bar{x}_2) = N(N-1) \langle \delta(\bar{x}_1 - \bar{r}_1)\delta(\bar{x}_2 - \bar{r}_2) \rangle$$

Then, by definition of mean, we have :

$$ \langle \delta(\bar{x}_1 - \bar{r}_1)\delta(\bar{x}_2 - \bar{r}_2) \rangle = \int \dots\int d\bar{r}_3 \dots d\bar{r}_N\mathbb{p}(\bar{x}_1,\bar{x}_2,\bar{r}_3 \dots ,\bar{r}_N) $$

Putting all together we have:

$$n_2(\bar{x}_1, \bar{x}_2) = \frac{N(N-1)}{N!\mathcal{Q_N}} \int \dots\int d\bar{r}_3 \dots d\bar{r}_Ne^{-\beta W(\bar{x}_1,\bar{x}_2,\bar{r}_3 \dots ,\bar{r}_N)}$$

This function represent the probability to find 2 particles of the system at the positions $\bar{x}_1$ and $\bar{x}_2$.
Is interesting to show the limiting case: if we consider an homogeneous system and if $|\bar{x}_1 -\bar{x}_2| \to + \infty$, all potential term containing either $\bar{x}_1$ or $\bar{x}_2$ vanishes:

$$
\begin{aligned}
n_2(\bar{x}_1, \bar{x}_2) &\sim \frac{1}{N!\mathcal{Q_N}} \int \dots\int d\bar{r}_3 \dots d\bar{r}_Ne^{-\beta \sum_{3 \leq i<j}U(|\bar{r}_i -\bar{r}_j|) }
\end{aligned}
$$

We now observe that

$$\frac{1}{N!} \int \dots\int d\bar{r}_1 \dots d\bar{r}_Ne^{-\beta \sum_{i<j}U(|\bar{r}_i -\bar{r}_j|) } = \mathcal{Q}_{N-2} = \mathcal{Q}_N / V^2 $$

So that, in the uncorrelated limit and in the thermodynamic limit:

$$
n_2(\bar{x}_1, \bar{x}_2) \sim \frac{N(N-1)}{\mathcal{Q_N}} \frac{\mathcal{Q_N}}{V^2} = \frac{N(N-1)}{V^2} \sim \frac{N^2}{V^2} = \rho^2

$$
