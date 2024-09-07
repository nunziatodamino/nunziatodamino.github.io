>[!info] **First order linear equation**
>The solution of the ODE:
>$$ y'(x)+a(x)y(x)=b(x) $$
>Is the following:
>$$y(x)=y_0(x) + y_p(x) = Ce^{-M(x)}+e^{M(x)}\int b(x) e^{M(x)} dx$$
>Where:
>$$ M(x) = \int a(x) dx $$


>[!info] **First order linear equation (Cauchy problem)**
>Suppose one has to solve the following Cauchy problem:
>$$  \begin{cases} y'(x)+a(x)y(x)=b(x) \\ y(x_0)=y_0 \end{cases} $$
>Is the following:
>$$y(x)=y_0(x) + y_p(x) = y_0e^{-M(x)}+e^{M(x)}\int_{x_0}^{x} b(x') e^{M(x')} dx'$$
>Where:
>$$ M(x) = \int_{x_0}^x a(x') dx' $$

Notice that in general a particular solution can be always be found by the condition $y'(x)=0$, so that one obtains:

$$ \tilde{y}_p = \frac{b(x)}{a(x)} \qquad \forall x:a(x)\neq 0 $$

Note that this version is dangerous to use because restricts the solution domain, but can sometimes be useful, for example can be use freely when $a$ is a number.
An important consideration is that if make this choice the constant in the homogeneous part should be recalibrated:

$$y(x)=y_0(x) + \tilde{y}_p(x) = Ce^{-M(x)}+\frac{b(x)}{a(x)} \qquad \Rightarrow y(x)=
+\left( y_0-\frac{b(x_0)}{a(x_0)} \right)e^{-M(x)}+\frac{b(x)}{a(x)}$$