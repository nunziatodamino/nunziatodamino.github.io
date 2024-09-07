We have that in a band the current density $\bar{J}_e$ of electrons is described by :

$$ \bar{J}_e = -2ne \sum_{\bar{k}\ \in\ \text{occupied} } \bar{v}_n(\bar{k}) = -2\frac{e}{V} \sum_{\bar{k}\ \in\ \text{occupied} } \frac{1}{\hbar} \nabla_{\bar{k}} E_n(\bar{k}) = -2\frac{e}{(2\pi)^3} \int_{\text{occupied} }d\bar{k}\  \frac{1}{\hbar} \nabla_{\bar{k}} E_n(\bar{k})   $$

We can observe, that for a completely filled band:

$$0=-2\frac{e}{(2\pi)^3} \int_{1^{st}\text{BZ} }d\bar{k}\  \frac{1}{\hbar} \nabla_{\bar{k}} E_n(\bar{k})=-2\frac{e}{(2\pi)^3} \int_{\text{occupied} }d\bar{k}\  \frac{1}{\hbar} \nabla_{\bar{k}} E_n(\bar{k}) +-2\frac{e}{(2\pi)^3} \int_{\text{unoccupied} }d\bar{k}\  \frac{1}{\hbar} \nabla_{\bar{k}} E_n(\bar{k})  $$

Then we can define $\bar{J}_e$ in a new way:

$$\bar{J}_e = +2\frac{e}{(2\pi)^3} \int_{\text{unoccupied} }d\bar{k}\  \frac{1}{\hbar} \nabla_{\bar{k}} E_n(\bar{k})\equiv \bar{J}_h$$

This leads to an important result: the current density produced by electrons occupying a given set of $\bar{k}$ is the same of the current density produced by opposite charge carriers occupying a set $\bar{k}'$ complementary to the first set in the first Brillouin zone.
We call these fictitious positive charges occupying the set of $\bar{k}'$ , holes.

The holes description is to be preferred in almost filled bands.

### Holes properties

#### Momentum

Let's define the $\bar{k}_h$ vector associate to an hole respect to the one associated to the electron, that we will simply denominate $\bar{k}$.
Suppose to have a filled band. Then is clear that:

$$ \sum_{\bar{k}_i \in 1^{st}BZ} \bar{k}_i =0 $$

Now we remove an electron. In this way we will have an hole. 
Then we obtain that the wavevector of the hole is the same as the sum of the wavevector of the band minus the removed electron wavevector, by definition of hole.
Called $j$ said electron:

$$ \bar{k}_h = \sum_{\bar{k}_i \in 1^{st}BZ} \bar{k}_i -\bar{k}_j $$

Obtaining finally:

$$ \bar{k}_h =  -\bar{k}_j $$

#### Energy

The total energy of a band is constant and is equal to the sum of the energy of the electrons.
Considering a filled band:

$$  \sum_{\bar{k}_i \in 1^{st}BZ} E_n(\bar{k}_i) =E_0  $$

If we now remove an electron we have an hole. following the same ansatz as before:

$$ E_n(\bar{k}_h) = \sum_{\bar{k}_i \in 1^{st}BZ} E_n(\bar{k}_i)- E_n(\bar{k}_j) = E_0- E_n(\bar{k}_j) $$

Considering that one can always redefine the energy scale, we can set $E_0=0$, in order to obtain:

$$ E_n(\bar{k}_h) =- E_n(\bar{k}_j) $$
#### Velocity

Using the same ansatz in [[Zettelkasten/Master's degree/Solid State Physics/Electron dynamics/Electron velocity and band energy|Electron velocity and band energy]], we define:

$$ \bar{v}_h(\bar{k}_h)=\frac{1}{\hbar} \nabla_{\bar{k}_h} E_h(\bar{k}_h) = -\frac{1}{\hbar} \nabla_{\bar{k}_h} E_e(\bar{k}_j) = \frac{1}{\hbar} \nabla_{\bar{k}_j} E_e(\bar{k}_j) = \bar{v}_e(\bar{k}_j) $$

Where we used the precedent results and the implicit $\nabla_{\bar{k}_h} = -\nabla_{\bar{k}_j}$.


#### Dynamics

We have clearly

$$ \hbar \frac{d\bar{k}_e}{dt} = \bar{F}_{ext} \qquad \hbar \frac{d\bar{k}_h}{dt} = -\bar{F}_{ext}$$

