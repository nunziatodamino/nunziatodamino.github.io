
>[!info] **Autonomous system**
>We define autonomous system a system of ODE's that not depends explicitly on the independent variable, i.e. :
>
>$$ \dot{\bar{x}}(t) = f(\bar{x}(t)) \qquad \iff \qquad \begin{cases} \dot{x}_1(t) = f_1(x_1(t), \dots, x_n(t)) \\ \dot{x}_2(t) = f_2(x_1(t), \dots, x_n(t)) \\ \vdots \\ \dot{x}_n(t) = f_n(x_1(t), \dots, x_n(t)) \\ \end{cases} $$


Contrary to a general ODE system, which has the form:

$$ \dot{\bar{x}}(t) = f(\bar{x}(t), t) $$

Note that in general an autonomous system is a non- linear system. 
We now define some important parameter for this kind of system:


>[!info] **Equilibrium point for an autonomous system**
>Considered an autonomous system $\dot{\bar{x}}(t) = f(\bar{x}(t))$ we define equilibrium point for the system a vector $\bar{x}^*(t)=(x_1^*(t), \dots, x_n^*(t))^T$ such as:
>$$f(\bar{x}^*(t))=\bar{0}$$


