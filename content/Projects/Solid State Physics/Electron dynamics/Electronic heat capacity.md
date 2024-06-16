We want to evaluate the electronic contribution to the [[Projects/Solid State Physics/Thermal transport/Heat capacity in solids - general considerations|heat capacity at constant volume]] in a solid.
The main idea then is to derive an expression for the internal energy and then perform a derivative respect to the temperature.
The internal energy of the system can be view as the mean energy due to electrons.
So we can write:

$$ U = \braket{E} = \int E g(E,T) dE$$

Where $g(E,T)$ is the probability distribution associated to the energy values. This function is:

$$ g(E,T) = \frac{1}{e^{\beta(E-E_F)}+1}D(E) = \bar{n}_E D(E)$$

Because is the probability that an eigenstate of energy $E$ is occupied times the number of states $dN$ in a region $dE$ (the density of states).
So we can write in the end:

$$ U = \braket{E} = \int_{0}^{+\infty} E \frac{1}{e^{\beta(E-E_F)}+1}D(E) dE$$

Now we proceed to the heat capacity evaluation:

$$ C_V = \frac{d}{dT}\left[ \int_{0}^{+\infty} E \frac{1}{e^{\beta(E-E_F)}+1}D(E) dE \right]$$

We use the following trick: we add to the bracket a constant term that doesn't depend on temperature. Moreover, observing that the total number of electrons in the system can be written as:

$$ N  = \int_{0}^{+\infty}\frac{1}{e^{\beta(E-E_F)}+1}D(E) dE $$

We have:

$$\begin{aligned} 
C_V &= \frac{d}{dT}\left[ \int_{0}^{+\infty} E \frac{1}{e^{\beta(E-E_F)}+1}D(E) dE \right]=\frac{d}{dT}\left[ \int_{0}^{+\infty} E \frac{1}{e^{\beta(E-E_F)}+1}D(E) dE -NE_F \right] = \\

&=\frac{d}{dT}\left[ \int_{0}^{+\infty} E \frac{1}{e^{\beta(E-E_F)}+1}D(E) dE -\int_{0}^{+\infty} E_F \frac{1}{e^{\beta(E-E_F)}+1}D(E) dE \right] = \\

& = \frac{d}{dT}\left[ \int_{0}^{+\infty} (E-E_F) \frac{1}{e^{\beta(E-E_F)}+1}D(E) dE \right]=  -\frac{1}{k_BT^2}\frac{d}{d\beta}\left[ \int_{0}^{+\infty} (E-E_F) \frac{1}{e^{\beta(E-E_F)}+1}D(E) dE \right] = \\

&=  \frac{1}{k_BT^2} \int_{0}^{+\infty} (E-E_F)^2 \frac{e^{\beta(E-E_F)}}{[e^{\beta(E-E_F)}+1]^2}D(E) dE 

\end{aligned}$$

Now we make the following observation. The derivative of the Fermi-Dirac distribution is non zero only in a neighborhood of the Fermi energy of width $k_BT$. So the only states that will contribute to the heat capacity will be in this neighborhood, so that  we can approximate $D(E) \sim D(E_F)$.
We can now continue to solve by change the variables for ease $x=\beta(E-E_F)$. Notice that $dx=\beta dE$

$$\begin{aligned} 
C_V &= k_B^2T\ D(E_F) \int_{-\beta E_F}^{+\infty} \frac{x^2e^{x}}{(e^{x}+1)^2} dx = k_B^2T\ \left(\frac{3}{2} \frac{N}{E_F}  \right) \int_{-\beta E_F}^{+\infty} \frac{x^2e^{x}}{(e^{x}+1)^2} dx= \\

&= \frac{3}{2}Nk_B \frac{T}{T_F} \int_{-\beta E_F}^{+\infty} \frac{x^2e^{x}}{(e^{x}+1)^2} dx \simeq \frac{3}{2}Nk_B \frac{T}{T_F} \int_{\mathbb{R}} \frac{x^2e^{x}}{(e^{x}+1)^2} dx

\end{aligned}$$

Where we used for the density of states the expression derived [[Projects/Solid State Physics/Electron dynamics/DOS in the Free Electron Model|here]], while we extend the integral range because $k_BT<<E_F$.
The integral in the expression is tabulated, and is value is:

$$ \int_{\mathbb{R}} \frac{x^2e^{x}}{(e^{x}+1)^2} dx =\frac{\pi^2}{3} $$

So, in the end, we can write:

$$ C^{\text{el}}_V = \frac{\pi^2}{2}Nk_B \frac{T}{T_F}  $$
