We start by [[Projects/Solid State Physics/Electron dynamics/Drude Theory|Drude Theory]], and we capture the fact that the resistivity is 0 by considering the friction term 0

$$ m \ddot{\bar{r}} + m\gamma\dot{\bar{r}} = -e\bar{E}(t) \quad \to \quad m \dot{\bar{v}} = -e\bar{E}(t)$$

Now we define the current density associated to the superconducting electrons $\bar{j}_s = -en_s\bar{v}$, where $n_s$ is the number density associated to the electrons participating to the superconductivity (called "super-electrons").
By differentiating the current density we obtain:

$$ \frac{d\bar{j}_s}{d t}=\dot{\bar{j}}_s = -en_s\dot{\bar{v}}=\frac{n_se^2}{m}\bar{E} $$

This is called **first London equation**.
Now we apply the curl to both members:

$$\nabla \times \dot{\bar{j}}_s = \nabla \times \frac{n_se^2}{m} \bar{E} \iff \nabla \times \dot{\bar{j}}_s = - \frac{n_se^2}{m} \partial_t\bar{B} \iff \partial_t \left(\nabla \times \bar{j}_s + \frac{n_se^2}{m} \bar{B}\right) =0 $$

Note that $\frac{d}{dt}\bar{j}_s = \frac{\partial}{\partial t}\bar{j}_s$ because $\frac{d}{dt}\bar{j}_s = \frac{\partial}{\partial t}\bar{j}_s + (\dot{\bar{v}}\cdot\nabla)\bar{j}_s$, but $(\dot{\bar{v}}\cdot\nabla)\bar{j}_s=0$. (see [here](https://math.stackexchange.com/questions/1285345/how-to-prove-that-vec-n-cdot-nabla-vec-n-is-orthogonal-to-vec-n-for-unit))  

Leading in the end to :

$$ \nabla \times \bar{j}_s + \frac{n_se^2}{m} \bar{B} = k $$

**Where $k$ is a constant. In order to predict the [[Projects/Solid State Physics/Superconductors/Meissner-Ochsenfeld effect]] one has to assume a priori (for this is a phenomenological theory) that the constant is 0.**
We have then:

$$ \nabla \times \bar{j}_s + \frac{n_se^2}{m} \bar{B} = 0 $$

Which is the **second London equation**
One can rewrite them more compactly by setting $\frac{m}{n_se^2}\equiv \lambda_L$.
In this way we have the set:

>[!info] **London's equations **
>$$ 
>\begin{cases}
>\bar{E} = \lambda_L \frac{d \bar{j}_s }{dt} \\
> \bar{B} = - \lambda_L \left(\nabla \times \bar{j}_s \right) \\
> \nabla \times \bar{B} = \mu_0\bar{j}_s
>\end{cases}
>$$

