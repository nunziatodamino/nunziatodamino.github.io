Suppose to have the elementary reversibile binary reaction:

$$ \alpha X+\beta Y \rightleftarrows \gamma Z + \delta T $$

Then we can assign as rate equation of this reaction, the following:

$$ r = k_+[X]^{\alpha}[Y]^{\beta} - k_-[Z]^{\gamma}[T]^{\delta} = r_+-r_- $$

Where $k_+$ and $k_-$ are the reaction coefficient of the reaction going forward and backward respectively.

Note that in general the powers of the concentrations are the stoichiometric coefficients only for an elementary reaction.

An interesting observation is that at equilibrium the reaction rate will be $0$, or also $r_+=r_-$. 
This gives back the [[Law of mass action]] with $K_{eq}= \frac{k_+}{k_-}$.

We now write the ODE system that describes the concentrations dynamics. By indicating $[X]\equiv x$, i.e. the concentrations with the relative lower case letters, we will have:

$$
\begin{cases}
\dot{x} = -\alpha \left( k_+x^{\alpha}y^{\beta} - k_-z^{\gamma}t^{\delta} \right) \\
\dot{y} = -\beta \left( k_+x^{\alpha}y^{\beta} - k_-z^{\gamma}t^{\delta} \right) \\
\dot{z} = \gamma \left( k_+x^{\alpha}y^{\beta} - k_-z^{\gamma}t^{\delta} \right) \\
\dot{t} = \delta \left( k_+x^{\alpha}y^{\beta} - k_-z^{\gamma}t^{\delta} \right)
\end{cases}
$$

Generally these kind of systems are solved numerically.