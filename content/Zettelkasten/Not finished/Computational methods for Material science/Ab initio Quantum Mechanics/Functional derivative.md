Suppose to consider a functional $\mathcal{F}[f(x)]$ and to want to consider its variation as $f(x)$ changes.
We begin by building an infinitesimal increment of the function $f(x)+\varepsilon \eta(x)$ where $\eta(x)$ is called test function.
If we consider $x$ fixed, the functional $\mathcal{F}[f(x)+\varepsilon \eta (x) ]$ is just a single variable function of $\varepsilon$.
So we can expand in Taylor's series, given that $\varepsilon$ is an infinitesimal parameter:

$$\mathcal{F}[f(x)+\varepsilon \eta (x) ] = \mathcal{F}[f(x)] + \varepsilon\left[\frac{d\mathcal{F}[f(x)+\varepsilon \eta (x) ]}{d \varepsilon}\right]_{\varepsilon=0} + \frac{1}{2}\varepsilon^2\left[\frac{d^2\mathcal{F}[f(x)+\varepsilon \eta (x) ]}{d \varepsilon^2}\right]_{\varepsilon=0} + O(\varepsilon^3) $$

If consider the expansion at the first order we obtain:

$$\left[\frac{d\mathcal{F}[f(x)+\varepsilon \eta (x) ]}{d \varepsilon}\right]_{\varepsilon=0} = \frac{\mathcal{F}[f(x)+\varepsilon \eta (x) ] - \mathcal{F}[f(x)]}{\varepsilon}$$

Now we can define the notion of functional derivative of the first order

>[!info] **Functional derivative of the first order**
>We define functional derivative of the first order of a functional $\mathcal{F}[f(x)]$ respect to $f(x)$, denoted with the symbol $\frac{\delta\mathcal{F}[f]}{\delta f(x)}$, the function defined by the following relation:
>
>$$\left[\frac{d\mathcal{F}[f(x)+\varepsilon \eta (x) ]}{d \varepsilon}\right]_{\varepsilon=0} = \int dx \frac{\delta\mathcal{F}[f]}{\delta f(x)} \eta(x) $$
>
>For every choice of the test function $\eta(x)$.

**So the idea is to expand in Taylor's series the functional $\mathcal{F}[f(x)+\varepsilon \eta (x) ]$ and try to write the first order term as an integral of the type above** 

One can have a more operative definition if we choose $\eta(x)=\delta(x-x')$.
In this way:

$$\left[\frac{d\mathcal{F}[f(x)+\varepsilon \delta(x-x') ]}{d \varepsilon}\right]_{\varepsilon=0} = \int dx \frac{\delta\mathcal{F}[f]}{\delta f(x)} \delta(x-x') = \frac{\delta\mathcal{F}[f]}{\delta f(x')} $$

Now, considering that $x$ is varying and $\varepsilon$ is a parameter, we can write

>[!info] **Functional derivative of the first order (operative definition) **
$$ \frac{\delta\mathcal{F}[f]}{\delta f(x')} = \lim_{\varepsilon\to 0 } \frac{\mathcal{F}[f(x)+\varepsilon  \delta(x-x') ] - \mathcal{F}[f(x)]}{\varepsilon} $$

