Suppose to have the elementary reversible reaction process:

$$ \alpha A+\beta B \rightleftarrows \gamma C + \delta D $$

According to what we have done in [[Zettelkasten/Master's degree/Models of Theoretical Physics/Reaction rate of an irreversible chemical reaction]] we want to create the concept of rate equation (or reaction rate) for this elementary process.
The idea is to split the reaction in 2 irreversible reactions:

$$\alpha A+\beta B \to \gamma C + \delta D \qquad \alpha A+\beta B \leftarrow \gamma C + \delta D $$

Each of which will have a rate equation of:

$$ r_1 = \frac{1}{V} \frac{d\xi_1}{dt} \qquad r_2 = \frac{1}{V} \frac{d\xi_2}{dt} $$

In the hypothesis of constant volume. Now we sum the rates, paying attention to the fact that $d\xi_2$ has a negative extent respect to $d\xi_1$, so , in order to have each member of the rate equation positive:

$$r_{tot} = r_1+r_2 = \frac{1}{V} \frac{d\xi_1}{dt} + \frac{1}{V} \frac{d\xi_2}{dt} = \frac{1}{V}\left( \frac{d\xi_1}{dt} - \left| \frac{d\xi_2}{dt} \right| \right) $$
