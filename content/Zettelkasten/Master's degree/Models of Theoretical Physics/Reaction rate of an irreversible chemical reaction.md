Suppose to have the elementary irreversible reaction process:

$$ \alpha A+\beta B \to \gamma C + \delta D $$

If we indicate with $[J]$ the molar concentration of the species $J$ we have that over time each concentration will change over time. Specifically we will have that the product concentration will rise, while the reactants concentration will decrease, all adjusted respect to the relative stoichiometric coefficient that indicates the number of moles in the reaction of that species, namely for our specific reaction: 

$$ -\frac{1}{\alpha} \frac{d[A]}{dt} = -\frac{1}{\beta} \frac{d[B]}{dt} = \frac{1}{\gamma} \frac{d[C]}{dt} = \frac{1}{\delta} \frac{d[D]}{dt} $$

So that for a generic reaction of $N$ reactants and $M$ products we expect $N+M$ equations of this kind.
It would be nice if instead of these many equation there would be only one.
This is the premise behind the rate equation.
In order to do so , we propose the following change of variable: for a species $J$ with stoichiometric coefficient $\nu_J$ we call the infinitesimal change in moles of that species $dn_J$ and that will be equal to:

$$ dn_J = \nu_j\  d\xi $$

N.B. $\nu_J$ is positive for the products and negative for the reactants

Where $\xi$ is called extent of the reaction. Moreover, if the volume during our reaction is constant, we have that, by dividing both sides by $V$ and putting $V$ inside the differential (possible only because is constant) the following:

$$ d\left(\frac{n_J}{V}\right) = \frac{\nu_j}{V}  d\xi \qquad \to \qquad d[J] =\frac{\nu_j}{V}  d\xi $$

By replugging this in the equations we have found in the beginning, all reduced to the equation:

$$ \frac{1}{V} \frac{d\xi}{dt} \equiv r $$

That we call rate equation. This can be found experimentally or postulated to be a certain function (see [[Zettelkasten/Master's degree/Models of Theoretical Physics/The rate law]]). Once found one can easily investigate the rate of change in time for any concentration by confronting the 2 expression, i.e. if one want to study the concentration of $A$ over time:

$$-\frac{1}{\alpha} \frac{d[A]}{dt} =  \frac{1}{V} \frac{d\xi}{dt} \equiv r  \qquad \Rightarrow \qquad \frac{d[A]}{dt} = -\alpha r$$
