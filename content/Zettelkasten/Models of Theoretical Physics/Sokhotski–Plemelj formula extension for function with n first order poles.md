The [[Sokhotski–Plemelj formula]] is valid when the function present a single pole on the $x$ axis. 

In this note we investigate the possibility of an extension for 2 first order poles, and consequently to n.

Let's consider the function:

$$ \frac{f(x)}{(x-x_0)(x-x_1)} $$

This can be rewritten easily as

$$ \frac{f(x)}{(x-x_0)(x-x_1)} = \frac{f_0(x)}{(x-x_0)} + \frac{f_1(x)}{(x-x_1)} \qquad f_0(x)=\frac{f(x)}{x-x_1};\  f_1(x)=\frac{f(x)}{x-x_0} $$

Now, if we introduce the factor $\pm i\varepsilon$ in the denominator for each pole, nothing changes.
So now we can consider the following (we consider the upper analicity case, the lower analicity case follows trivially) :
 $$\lim_{\varepsilon \to 0^+} \int_{\mathbb{R}}\frac{f(x)}{(x-x_0+i\varepsilon)(x-x_1+i\varepsilon)}dx = \lim_{\varepsilon \to 0^+} \int_{\mathbb{R}}\frac{f_0(x)}{(x-x_0+i\varepsilon)}dx + \lim_{\varepsilon \to 0^+} \int_{\mathbb{R}}\frac{f_0(x)}{(x-x_0+i\varepsilon)}dx $$

Now we apply the formula for each integral on the RHS, and obtain:

$$ = \text{P.V.}\int_{\mathbb{R}}\frac{f_0(x)}{x-x_0}dx -i\pi f_0(x_0) + \text{P.V.}\int_{\mathbb{R}}\frac{f_1(x)}{x-x_1}dx -i\pi f_1(x_1) = $$

$$ =\text{P.V.}\int_{\mathbb{R}}\frac{f(x)}{(x-x_0)(x-x_1)} -i \pi (f_0(x_0)+f_1(x_1)) $$

By putting all together we obtain the extension:

>[!info] **Sokhotski–Plemelj formula (integral form) for function with 2 simple poles**
>Let $f:\mathbb{R}\to \mathbb{C}$ an integrable function, such as $f(x_0)\neq 0 ,  f(x_1)\neq 0$ and analytic over $\mathbb{R}$ (or otherwise stated as $f \in C^\infty(\mathbb{R})$).
> Let then be $f(z)$ its complexification.
>
> Upper analicity form
> - Let then be $f(z)$ be holomorphic (or analytical) in $\Im(z)>0$ and also let $f(z) \to 0$ as $|z| \to +\infty$ uniformly, while $0<\arg(z)<\pi$. Then the following identity holds:
> 
> $$ \lim_{\varepsilon \to 0^+} \int_{\mathbb{R}}\frac{f(x)}{(x-x_0+i\varepsilon)(x-x_1+i\varepsilon)}dx  =\text{P.V.}\int_{\mathbb{R}}\frac{f(x)}{(x-x_0)(x-x_1)} -i \pi (f_0(x_0)+f_1(x_1))$$
>
>Lower analicity form
>
> - Otherwise, let then be $f(z)$ be holomorphic (or analytical) in $\Im(z)<0$ and also let $f(z) \to 0$ as $|z| \to +\infty$ uniformly, while $\pi<\arg(z)<2\pi$ (or equivalently $-\pi<\arg(z)<0$). Then the following identity holds:
> 
>  $$ \lim_{\varepsilon \to 0^+} \int_{\mathbb{R}}\frac{f(x)}{(x-x_0-i\varepsilon)(x-x_1-i\varepsilon)}dx  =\text{P.V.}\int_{\mathbb{R}}\frac{f(x)}{(x-x_0)(x-x_1)} -i \pi (f_0(x_0)+f_1(x_1))$$
>  
>  Where, for both forms, the following position is made:
>  
>  $$f_0(x)=\frac{f(x)}{x-x_1} \qquad f_1(x)=\frac{f(x)}{x-x_0}$$

This methodology suggest an extension to n poles, given that:

$$ \frac{f(x)}{\prod_{i=1}^n(x-x_i)} = \sum_{i=1}^n \frac{f_i(x)}{(x-x_i)} \qquad\text{where}\ f_{i}(x)=\frac{f(x)}{\prod_{j\neq i}(x-x_j)}  $$

We can then write:

>[!info] **Sokhotski–Plemelj formula (integral form) for function with n simple poles**
>Let $f:\mathbb{R}\to \mathbb{C}$ an integrable function, such as $f(x_i)\neq 0, i=1,2,\dots n$ and analytic over $\mathbb{R}$ (or otherwise stated as $f \in C^\infty(\mathbb{R})$).
> Let then be $f(z)$ its complexification.
>
> Upper analicity form
> - Let then be $f(z)$ be holomorphic (or analytical) in $\Im(z)>0$ and also let $f(z) \to 0$ as $|z| \to +\infty$ uniformly, while $0<\arg(z)<\pi$. Then the following identity holds:
> 
> $$ \lim_{\varepsilon \to 0^+} \int_{\mathbb{R}}\frac{f(x)}{\prod_{i=1}^n(x-x_i+i \varepsilon)}dx  =\text{P.V.}\int_{\mathbb{R}}\frac{f(x)}{\prod_{i=1}^n(x-x_i)} -i \pi \sum_{i=1}^n f_i(x_i)$$
>
>Lower analicity form
>
> - Otherwise, let then be $f(z)$ be holomorphic (or analytical) in $\Im(z)<0$ and also let $f(z) \to 0$ as $|z| \to +\infty$ uniformly, while $\pi<\arg(z)<2\pi$ (or equivalently $-\pi<\arg(z)<0$). Then the following identity holds:
> 
>   $$ \lim_{\varepsilon \to 0^+} \int_{\mathbb{R}}\frac{f(x)}{\prod_{i=1}^n(x-x_i-i \varepsilon)}dx  =\text{P.V.}\int_{\mathbb{R}}\frac{f(x)}{\prod_{i=1}^n(x-x_i)} +i \pi \sum_{i=1}^n f_i(x_i) $$
>  
>  Where, for both forms, the following position is made:
>  
>  $$f_{i}(x)=\frac{f(x)}{\prod_{j\neq i}(x-x_j)} \qquad i=1,2,\dots n$$
