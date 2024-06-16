We want to provide an interpretation for the conductivity parameter in the microscopic form of [[Ohm's Law]]:

$$\bar{J} = \sigma \bar{E}$$

Where we briefly recall that $\bar{J}$ is the current density vector, and $\bar{E}$ is the electric field.

There are mainly two elementary models that provide a microscopic description of this parameter, both based on the [[Projects/Solid State Physics/Electron dynamics/Free electron model for metals (Sommerfeld model)]], which assumes that electrons behave like a [[Completely degenerate Fermi gas]].


### Drude Model

**Note that this simplistic approach is valid only if we are in the limit of simple metal, i.e. alkali metals or metals with 1 valence electrons, or if we restrict only to consideration to [[Projects/Solid State Physics/Electron dynamics/Difference between intraband and interband transitions|intraband transition]]**

As seen in [[Projects/Solid State Physics/Electron dynamics/Drude Theory]], we derived the general equation of motion for an electron, and it solution

$$ \bar{r}(t) = \frac{e}{m(\omega^2+i\gamma\omega)}\bar{E}(t) $$

So we can simply evaluate electrical conductivity by evaluating the current density using its definition $\bar{J} = -ne\bar{v}(t)$, where $n$ is the electron density, $e$ the electron charge and $\bar{v}(t)$ the electron velocity.

We obtain then:

$$ \bar{J} = -ne\bar{v}(t) =  ne^2\frac{i\omega }{m(\omega^2+i\gamma\omega)} \bar{E}(t)= \frac{ne^2}{m}\frac{i}{(\omega+i\gamma)} \bar{E}(t)=\frac{ne^2\tau}{m}\frac{1}{(1-i\omega\tau)} \bar{E}(t)$$

So that we can define:

$$ \sigma(\omega)=\frac{ne^2\tau}{m}\frac{1}{(1-i\omega\tau)} \equiv \sigma_0\frac{1}{(1-i\omega\tau)} $$

The term $\sigma_0$ is the electrical conductivity at the limit of the constant forcing field $(\omega \to 0)$



### Elementary Theory using Fermi Sphere