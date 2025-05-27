When talking about the **correlation function** we talk about a legendary mathematical object, and given that is used in different fields, each one has its one definition and its own story.
We use this note to try to tame the confusion.

We start by saying that, most of the time, in the context of Computational Physics and Statistical Physics, correlation and auto-correlation are used as synonyms, even if of course, they are not.
**In general when one says correlation function it usually means the 2-point connected auto-correlation function.**

Given a random variable $x_i$ extracted from a probability distribution, we define the 2-point connected auto-correlation function as :

$$G_c(i,j)(\xi)\equiv\braket{x_ix_j}_c(\xi) \equiv \braket{x_ix_j}(\xi) - \braket{x_i}(\xi)\braket{x_j}(\xi)$$

Where $\xi$ is a control parameter that goes usually from 0 to $+ \infty$.
Note that usually the control parameter is omitted formally and also that this is one particular case of an **Ursell function**.
The reason why this is defined in this way is because, when the control parameter $\xi$ regulating our system diverges (say for example that the r.v.s. are spins and we evaluate the $G_c(i,j)$ while the distance between the 2 spins gets bigger ), then we have that the variable naturally de-correlates, i.e. $\braket{x_ix_j}(\xi) \to \braket{x_i}(\xi)\braket{x_j}(\xi)$ when $\xi \to +\infty$.
In this case one obtain that for $\xi \to +\infty$ we have $G_c(i,j)(\xi) \to 0$.
Moreover, in the context of Computational Physics, this function is normalized, so that is computation is stable.
