## Formal definition: probability density and partition function

## Connection to the thermodynamic quantities

### Entropy

By definition 

$$ S = -k_B \ln \mathcal{\Omega} = -k_B \ln \left[ \frac{1}{\mathcal{Z}}\sum_{C}e^{-\beta\mathscr{H}} \right] $$

As we will see further, this can be related easily to the free energy. In fact, considering that  $E - TS = F$:

$$ \frac{\partial F}{\partial T} = \frac{\partial}{\partial T} [E-TS] = -S  $$

### Mean energy

Consider the definition of mean energy in the canonical ensemble:

$$ \braket{E} = \frac{1}{\mathcal{Z}}\sum_{C}\mathscr{H}e^{-\beta\mathscr{H}} $$

Notice now that if we differentiate the free energy respect to the temperature:

$$
\begin{aligned}
\frac{\partial F}{\partial T} 
&= \frac{\partial}{\partial T}\left[ -k_BT\ln\mathcal{Z} \right] = -k_B\ln\mathcal{Z} -k_BT \frac{1}{\mathcal{Z}}\frac{\partial \beta }{\partial T}\frac{\partial \mathcal{Z} }{\partial \beta} = \\
&= -k_B\ln\mathcal{Z} -\frac{k_BT}{k_BT^2} \frac{1}{\mathcal{Z}}\sum_{C}\mathscr{H}e^{-\beta\mathscr{H}} = \\
&= -k_B\ln\mathcal{Z} -\frac{1}{T} \braket{E} 
\end{aligned}
$$

Now, we multiply both sides by $T$, and by rearranging:

$$
T\frac{\partial F}{\partial T} 
= -k_BT\ln\mathcal{Z} + \braket{E} \iff \braket{E} = F-T\frac{\partial F}{\partial T} 
$$

If one wants can have the version per unit volume (or per degree of freedom), by dividing by $V$ (or $N$)

$$\braket{e} = f-T\frac{\partial f}{\partial T} $$

We make also the following observation: the formula could have been immediately constructed by the thermodynamic definition $E + TS = F$ . 