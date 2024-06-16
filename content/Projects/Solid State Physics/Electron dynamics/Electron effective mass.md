When an electron is in a solid its seems to lose some of its individual characteristics. 
For example when subject to an external force it does not behave coherently with its known mass, but has different behaviors, i.e. as if it has different mass, according to different circumstances.
In this section we will try to understand why.

Suppose we want to write for an electron in a solid an expression of the type:

$$ \bar{F}_{ext} = m^* \frac{d\bar{v}}{dt}$$

I.e. we want to see if it satisfies a Newton's equation. If we start by [[Projects/Solid State Physics/Electron dynamics/Electron velocity and band energy|the expression]] $\bar{v}_n(\bar{k})=\frac{1}{\hbar} \nabla_{\bar{k}} E_n(\bar{k})$ and we consider the derivative of its component respect the time:

$$ \frac{dv_i}{dt} = \frac{\partial v_i}{\partial k_j}\frac{dk_j}{dt} = \frac{1}{\hbar}\frac{\partial^2 E}{\partial k_i\partial k_j}\frac{dk_j}{dt} = \frac{1}{\hbar^2}\frac{\partial^2 E}{\partial k_i\partial k_j}(F_{ext})_j  $$

Where we used the fact that $v$ is a composite function and also we use [[Projects/Solid State Physics/Electron dynamics/Effect of an external force on an electron crystal momentum|the formula on how the crystal momentum changes]].

Then, if we define the matrix (because of sophistication people call it also tensor):

$$ m^*_{ij}=\left(\frac{1}{\hbar^2}\frac{\partial^2 E}{\partial k_i\partial k_j}\right)^{-1} $$

We achieve our goal. The define quantity is called **effective mass tensor**