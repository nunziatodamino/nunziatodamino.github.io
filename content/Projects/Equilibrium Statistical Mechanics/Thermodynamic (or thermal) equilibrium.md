We now state precisely what it means that a system is at thermodynamic equilibrium.

Recalling that in the classical framework an observable is a real valued function $\mathcal{O}(\bar{q}^{\alpha}(t), \bar{p}_{\alpha}(t),t)$, we can evaluate its time-average in the following way:

$$ \braket{\mathcal{O}}_{time} = \lim_{T \to +\infty} \int_0^{T}\mathcal{O}(\bar{q}^{\alpha}(t), \bar{p}_{\alpha}(t),t) dt $$

Then one can state the following definition:

>[!info] **Thermodynamic (or thermal) equilibrium**
>A system is said to be at thermodynamic (or thermal) equilibrium if, for all the possible observables $\mathcal{O}(\bar{q}^{\alpha}(t), \bar{p}_{\alpha}(t),t)$ the time-average is time independent: 
$$ \frac{\partial \braket{\mathcal{O}}_{time} }{\partial t} =0 $$

Note that this condition, written in this form, is extremely difficult, albeit impossible, to be verified. 
Is easy to show that, for a given observable, if one proves that $\frac{\partial\mathcal{O} }{\partial t} =0 \Rightarrow  \frac{\partial \braket{\mathcal{O}}_{time} }{\partial t} =0$, but the problem remains, because one has to prove this for every observable.

In order to work properly then one has to introduce the [[Ergodic hypothesis]].

With this the condition of thermal equilibrium becomes:

$$ \frac{\partial \braket{\mathcal{O}}_{ensemble} }{\partial t} =0 $$

But this is way easy to prove, we just have to show that :

$$ \frac{\partial \rho }{\partial t} =0 $$

And this leads automatically to the fact that the ensemble average will be time independent, leading also to the following weaker definition:

>[!info] **Thermodynamic (or thermal) equilibrium for ergodic systems**
>An ergodic system is said to be at thermodynamic (or thermal) equilibrium if,
$$ \frac{\partial \rho }{\partial t} =0 $$

