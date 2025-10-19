### Definition

Suppose to consider a functional $\mathcal{F}[f(x)]$ and to want to consider its variation as $f(x)$ changes.
Note that $x$ can be anything, generally $x \in \mathbb{R}^n$.
We begin by building an infinitesimal increment of the function $f(x)+\varepsilon \eta(x)$ where $\eta(x)$ is called test function.
If we consider $x$ fixed, the functional $\mathcal{F}[f(x)+\varepsilon \eta (x) ]$ is just a single variable function of $\varepsilon$.
So we can expand in Taylor's series, given that $\varepsilon$ is an infinitesimal parameter:

$$\mathcal{F}[f(x)+\varepsilon \eta (x) ] = \mathcal{F}[f(x)] + \varepsilon\left[\frac{d\mathcal{F}[f(x)+\varepsilon \eta (x) ]}{d \varepsilon}\right]_{\varepsilon=0} + \frac{1}{2}\varepsilon^2\left[\frac{d^2\mathcal{F}[f(x)+\varepsilon \eta (x) ]}{d \varepsilon^2}\right]_{\varepsilon=0} + O(\varepsilon^3) $$

If consider the expansion at the first order we obtain:

$$\left[\frac{d\mathcal{F}[f(x)+\varepsilon \eta (x) ]}{d \varepsilon}\right]_{\varepsilon=0} = \frac{\mathcal{F}[f(x)+\varepsilon \eta (x) ] - \mathcal{F}[f(x)]}{\varepsilon}$$

Now we can define the notion of functional derivative of the first order if take the limit of both sides (note that the LHS is not affected):

>[!info] **Functional derivative of the first order**
>We define functional derivative of the first order of a functional $\mathcal{F}[f(x)]$ respect to $f(x)$, denoted with the symbol $\frac{\delta\mathcal{F}[f]}{\delta f(x)}$, the function defined by the following relation:
>
>$$\left[\frac{d\mathcal{F}[f(x)+\varepsilon \eta (x) ]}{d \varepsilon}\right]_{\varepsilon=0} =\lim_{\varepsilon \to 0}\frac{\mathcal{F}[f(x)+\varepsilon \eta (x) ] - \mathcal{F}[f(x)]}{\varepsilon} =  \int dx \frac{\delta\mathcal{F}[f]}{\delta f(x)} \eta(x) $$
>
>Or equivalently
>
>$$\mathcal{F}[f + \varepsilon \eta] - \mathcal{F}[f] = \delta\mathcal{F} \equiv \int d^dx \frac{\delta\mathcal{F}[f]}{\delta f(x)} \eta(x) $$
>
>For every choice of the test function $\eta(x)$.
>Note that we will call $\delta\mathcal{F}$ **first variation of the functional**.
>Note that the relation that defines the functional derivative is technically the **directional functional derivative along $\eta$**.

**So the idea is in general to expand in Taylor's series the functional $\mathcal{F}[f(x)+\varepsilon \eta (x) ]$ and try to write the first order term as an integral of the type above, or in another words to evaluate the first variation of the functional** 

One can have a more operative definition if we choose $\eta(x)=\delta(x-x')$.
In this way:

$$\left[\frac{d\mathcal{F}[f(x)+\varepsilon \delta(x-x') ]}{d \varepsilon}\right]_{\varepsilon=0} = \int dx \frac{\delta\mathcal{F}[f]}{\delta f(x)} \delta(x-x') = \frac{\delta\mathcal{F}[f]}{\delta f(x')} $$

Now, considering that $x$ is varying and $\varepsilon$ is a parameter, we can write

>[!info] **Functional derivative of the first order (operative definition) **
$$ \frac{\delta\mathcal{F}[f]}{\delta f(x')} = \lim_{\varepsilon\to 0 } \frac{\mathcal{F}[f(x)+\varepsilon  \delta(x-x') ] - \mathcal{F}[f(x)]}{\varepsilon} $$
>
>Note that this define the derivative **pointwise at position x'**

### Properties

>[!info] **Properties**
>- **Linearity**:  
>  $$
>  \frac{\delta (a\mathcal{F} + b\mathcal{G})}{\delta f(x)} = a\,\frac{\delta\mathcal{F}}{\delta f(x)} + b\,\frac{\delta\mathcal{G}}{\delta f(x)}
>  $$
>- **Product rule**:  
>  $$
>  \frac{\delta(\mathcal{F}\,\mathcal{G})}{\delta f(x)} = \frac{\delta\mathcal{F}}{\delta f(x)}\,\mathcal{G} + \mathcal{F}\,\frac{\delta\mathcal{G}}{\delta f(x)}
>  $$
>- **Chain rule**:  
>  For $\mathcal{H}[f]=H(\mathcal{G}[f])$:  
>  $$
>  \frac{\delta\mathcal{H}}{\delta f(x)} = H'\bigl(\mathcal{G}[f]\bigr)\;\frac{\delta\mathcal{G}}{\delta f(x)}
>  $$
>- **Locality / Delta identity**:  
>  $$
>  \frac{\delta f(y)}{\delta f(x)} = \delta^d(y - x)
>  $$

### Important examples

>[!info]  **Functional derivative of a local functional**
>Consider the functional:
>
>$$ F[f] = g(f(x)) $$
>
>Note that this is a functional only if we consider $x$ fixed. Then:
>
>$$ \frac{\delta \mathcal{F}[f]}{\delta f(x')} =  g'(f(x)) \delta^d (x-x') $$
>
>Where $g'(f(x)) = \frac{dg}{df}$


- Proof : by using the chain rule and locality property in succession:

$$ \frac{\delta \mathcal{F}[f]}{\delta f(x')} =  \mathcal{F}'[g(f(x))]\frac{\delta f(x)}{\delta f(x')} =   \mathcal{F}'[g(f(x))]\delta^d (x-x') =   g'(f(x)) \delta^d (x-x')$$


>[!info] **Functional derivative of a local functional 2**
>We prove that given: 
> 
$$ \mathcal{F}[f] = \int d^dx\ g(f(x))$$
>
Then 
>
$$ \frac{\delta \mathcal{F}[f]}{\delta f(x)} = \frac{\partial g(f(x))}{\partial f(x)} =\frac{\partial g}{\partial f} $$

- Proof : By definition:

$$ \mathcal{F}[f + \varepsilon \eta] = \int d^dx\ g(f(x)+\varepsilon\eta(x)) \simeq \int d^dx\ \left[g(f(x)) + \varepsilon \frac{dg(f(x)+\varepsilon\eta(x))}{d\varepsilon}_{|\varepsilon = 0}\right]$$

We conclude that by recalling:

$$\mathcal{F}[f + \varepsilon \eta] - \mathcal{F}[f] = \delta\mathcal{F} \equiv \int dx \frac{\delta\mathcal{F}[f]}{\delta f(x)} \eta(x) $$

One has:

$$ 
\begin{aligned}
\frac{\delta \mathcal{F}[f]}{\delta f(x)}\eta(x) &= \frac{dg(f(x)+\varepsilon\eta(x))}{d\varepsilon}_{|\varepsilon = 0}  = \left[\frac{\partial g(f(x)+\varepsilon\eta(x))}{\partial(f(x)+\varepsilon\eta(x))}\frac{\partial(f(x)+\varepsilon\eta(x))}{\partial\varepsilon}\right]_{|\varepsilon = 0} = \\
&=\left[\frac{\partial g(f(x)+\varepsilon\eta(x))}{\partial(f(x)+\varepsilon\eta(x))}\eta(x)\right]_{|\varepsilon = 0} = \frac{\partial g(f(x))}{\partial f(x)}\eta(x)
\end{aligned}
$$

This concludes the proof.

>[!info] **Field Euler-Lagrange equation**
>We prove that given: 
> 
$$ \mathcal{F}[f] = \int d^dx\ \mathscr{L}(f(x), \nabla f(x))$$
>
Then 
>
$$ \frac{\delta \mathcal{F}[f]}{\delta f(x)} = \frac{\partial \mathscr{L}}{\partial f} - \nabla \cdot \frac{\partial \mathscr{L}}{\partial (\nabla f)} $$
>
> Which is the **Euler-Lagrange equation for fields**.

- Proof : We start by evaluating the first variation:

$$ \mathcal{F}[f+\varepsilon\eta] = \int d^dx\ \mathscr{L}(f(x)+\varepsilon\eta(x), \nabla [f(x)+\varepsilon\eta(x)]) \simeq \mathcal{F}[f] + \int d^dx\ \varepsilon \left[\frac{d\mathscr{L}(f(x)+\varepsilon\eta(x), \nabla [f(x)+\varepsilon\eta(x)])}{d\varepsilon}\right]_{\varepsilon = 0} $$

Than by recalling:

$$\mathcal{F}[f + \varepsilon \eta] - \mathcal{F}[f] = \delta\mathcal{F} \equiv \int d^dx \frac{\delta\mathcal{F}[f]}{\delta f(x)} \eta(x) $$

One has (we set $f_{\varepsilon} =f(x)+\varepsilon\eta(x)$):

$$
\begin{aligned}
\frac{\delta \mathcal{F}[f]}{\delta f(x)}\eta(x) &= \left[\frac{d\mathscr{L}(f_{\varepsilon}), \nabla [f_{\varepsilon}])}{d\varepsilon}\right]_{\varepsilon = 0}=\left[ \frac{\partial\mathscr{L}(f_{\varepsilon}), \nabla [f_{\varepsilon}])}{\partial f_{\varepsilon}}\frac{\partial f_{\varepsilon}}{\partial \varepsilon} + \frac{\partial\mathscr{L}(f_{\varepsilon}), \nabla [f_{\varepsilon}])}{\partial \nabla [f_{\varepsilon}]}\frac{\partial \nabla [f_{\varepsilon}]}{\partial \varepsilon} \right]_{\varepsilon = 0} = \\
&= \left[ \frac{\partial\mathscr{L}(f_{\varepsilon}), \nabla [f_{\varepsilon}])}{\partial f_{\varepsilon}}\eta + \frac{\partial\mathscr{L}(f_{\varepsilon}), \nabla [f_{\varepsilon}])}{\partial \nabla [f_{\varepsilon}]}\nabla\eta \right]_{\varepsilon = 0}
\end{aligned}
$$

We can transform the second term in the RHS using the integral. In fact by considering its integral and the second Green identity:

$$
\int_{\Omega} d^dx\ \frac{\partial \mathscr{L}}{\partial \nabla f_\varepsilon} \cdot \nabla \eta 
= -\int_{\Omega} d^dx\ \left[ \nabla \cdot \left( \frac{\partial \mathscr{L}}{\partial \nabla f_\varepsilon} \right) \eta \right] 
+ \int_{\partial \Omega} dS\ \eta\, \frac{\partial \mathscr{L}}{\partial \nabla f_\varepsilon} \cdot \hat{n}
$$

The surface integral becomes 0 if we choose a test function that is 0 at the boundary (choice we can make as $\eta$ is arbitrary).
So in the one has:

$$
\begin{aligned}
\frac{\delta \mathcal{F}[f]}{\delta f(x)}\eta(x)
&= \left[ \frac{\partial\mathscr{L}(f_{\varepsilon}), \nabla [f_{\varepsilon}])}{\partial f_{\varepsilon}}\eta - \nabla\cdot \frac{\partial\mathscr{L}(f_{\varepsilon}), \nabla [f_{\varepsilon}])}{\partial \nabla [f_{\varepsilon}]}\eta \right]_{\varepsilon = 0} = \\
&=\left[ \frac{\partial\mathscr{L}}{\partial f} - \nabla\cdot \frac{\partial\mathscr{L}}{\partial (\nabla f)} \right]\eta
\end{aligned}
$$

Which is what we wanted to show.