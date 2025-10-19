We can extent the [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/PAC learning theorem|PAC learning theorem]] to any algorithm that is not specifically the [[Zettelkasten/Master's degree/Machine learning/Statistical Machine Learning/Empirical risk minimization (ERM)|Empirical risk minimization (ERM)]] one.


>[!definition] Realizable PAC learnability  
>A hypothesis class $H$ is realizable PAC learnable (or PAC learnable under realizability) if there exist a function  
>$$m_H : (0,1)^2 \to \mathbb{N}$$  
>and a learning algorithm $A$ such that for all $\varepsilon, \delta \in (0,1)$ and for every distribution $D$ and target $f$ realizable by $H$, for any sample size  
>$$m \ge m_H(\varepsilon, \delta),$$  
>we have  
>$$\Pr_{S \sim D^{m}}\!\big[ L_{\text{true}}(A(S)) \le \varepsilon \big] \ge 1 - \delta.$$  

Note that we have the following corollary :

>[!info] **Finite classes are realizable PAC learnable**
>Finite hypothesis classes are realizable PAC learnable with :
>$$ m_H(\varepsilon, \delta)= \frac{1}{\varepsilon} \ln \left( \frac{|H|}{\delta} \right) $$

This is a sufficient condition : there can be infinite classes that are PAC learnable.