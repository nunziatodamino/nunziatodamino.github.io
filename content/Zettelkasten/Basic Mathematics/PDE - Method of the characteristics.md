This method is used to solve PDE's of the type:

$$ \partial_t f(x,t) = g(x)\partial_xf(x,t) + C$$

We have the following:

>[!info] **Method of characteristics**
>We have the following equivalence:
>
>$$ \partial_t f(x,t) = g(x)\partial_xf(x,t) + C \qquad \iff \qquad \begin{cases} g(x) =  - \frac{dx}{dt} \\ \frac{d f(x(t),t)}{dt} = C\end{cases}$$
>
>I.e one can transform a first order linear PDE in a system of ODE's.
>Then the problem can be solved only if an initial condition $f(x,t_0)$ is given, and the solution is:
>
>$$ f(x,t)= C(t-t_0) + f(x(t_0),t_0) $$
>
>Where $x(t_0)$ is found by the first equation in the system.

Note that this method can be extended in the following way $g(x)\to g(x,t)$ where the first ODE is solvable.
## Ansatz

We now show the general ansatz of the method by considering a generic 2 variable function $u(x,t)$, and a moving observer $x(t)$, so that we can evaluate the expression:

$$ \frac{d u(x(t),t)}{dt} = \frac{dx}{dt}\partial_x u + \partial_t u $$

Where we used the chain rule to derive this expression.
Now this equation is the same as the proposed PDE if, by reordering:

$$\partial_t u =  - \frac{dx}{dt}\partial_x u + \frac{d u(x(t),t)}{dt}  $$

We then make the following positions:

$$ g(x) =  - \frac{dx}{dt} \qquad \frac{d u(x(t),t)}{dt} = C$$

So that we are looking for the particular curves along which the function $u$ has constant derivatives, and said curves, called characteristics, are found by the first condition.

If then we have an initial condition, the problem is solved.
Suppose I know, at time $t_0$ the value $u(x,t_0)$.
Then:

$$ \frac{d u(x(t),t)}{dt} = C \qquad \Rightarrow \qquad u(x(t),t) \equiv u(x,t)= C(t-t_0) + u(x(t_0),t_0)$$

