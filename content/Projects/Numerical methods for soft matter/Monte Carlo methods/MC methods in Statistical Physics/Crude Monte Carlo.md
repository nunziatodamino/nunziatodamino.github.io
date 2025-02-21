### 1 Dimension

Suppose one wants to evaluate the integral:

$$ I = \int_{a}^b f(x) dx $$

Then one can simply do the following:

$$ I = \int_{a}^b f(x) \frac{b-a}{b-a} dx = (b-a) \int_{a}^b f(x) \frac{dx}{b-a} \equiv (b-a) \int_{a}^b f(x) d \mu = (b-a) \braket{f}_{\mu} $$

So one can evaluate the integral by evaluating in the end $\braket{f}_{\mu}$ which is the expected value of the function $f$ respect the probability measure $d\mu = \frac{dx}{b-a}$.

Now we estimate this value, that is by definition a mean, we use a so called N-points estimate:

$$ \braket{f}_{\mu} = \frac{1}{N}\sum_{i=1}^Nf_i $$

Where $f_i =f(x_i)$, and $x_i$ is sampled from the uniform distribution defined be the measure $d\mu$.
Why this is a good estimator is explained [[Projects/Numerical methods for soft matter/Monte Carlo methods/Random numbers generation/Estimators of the mean and the variance|here]].

In the end we have the so called crude Monte Carlo method to estimate integrals:

$$ I = \int_{a}^b f(x) dx \simeq \frac{b-a}{N}\sum_{i=1}^Nf_i$$

So the algorithm is quite simple:

 - Step = i
 - Generate $x_i$, uniform number in $[a,b]$
 - Evaluate $f(x_i)$
 - Sum += $f(x_i)$
 - Step i+=1 , while $i<N$

Then one can simply multiply by the constants and obtain the estimation

### N dimension

In the same way one can extend the reasoning to a N-dimensional integral:

$$ I_N = \int_{\Omega}f(x_1,\dots,x_n) d^nx $$

First we consider an hyper-rectangle that contains the domain $\Omega$ : $\Omega \subset R = I_1 \times \dots \times I_n$.
Then we divide and multiply by the volume of the hyper-rectangle, and the ansatz is the same:

$$ I_N = \int_{\Omega}f(x_1,\dots,x_n) d^nx = V_R \braket{f}_{\mu}$$

Where this time the measure $d\mu$ defines the uniform distribution of the hyper-rectangle $R$.
This time one as to put the attention that the points that lies outside $\Omega$ contributes 0 to the integral, so one has as estimate:

$$ I_N = \int_{\Omega}f(x_1,\dots,x_n) d^nx = \frac{V_R}{N}\sum_{i=1}^{N_{\Omega}}f_i$$

So that the algorithm is like this.

- Step i
- Generate a point $\bar{x}_i=(x_1, \dots, x_n)$ uniformly in $R$:
	- Generate a point $x_1$ in $I_1$
	- ...
	- Generate a point $x_n$ in $I_n$
- Check if the point lies in $\Omega$: if true
	- $N_{\Omega}$ +=1
	- Evaluate $f(\bar{x}_i)$
	- sum += $f(\bar{x}_i)$
- Step i += 1 , while $i<N$

In the end one obtains the results by multiplying sum by the remaining constants.


