We want to prove the following : given an electron in a Bloch orbital $\psi_{n\bar{k}}$ , its velocity $\bar{v}_n(\bar{k})$ is related to its band energy $E_n(\bar{k})$ by the relation:

$$ \bar{v}_n(\bar{k})=\frac{1}{\hbar} \frac{\partial E_n(\bar{k})}{\partial \bar{k}} $$

Proof: Let's consider the Bloch orbital expansion:

$$\psi_{n\bar{k}}(\bar{r}) = e^{i(\bar{k} \cdot\bar{r})}u_{n\bar{k}}(\bar{r})$$

If we put this solution in the periodic potential problem, we obtain:

$$-\frac{\hbar^2}{2m}\nabla^2(e^{i(\bar{k} \cdot\bar{r})}u_{n\bar{k}}(\bar{r}))+V(\bar{r})(e^{i(\bar{k} \cdot\bar{r})}u_{n\bar{k}}(\bar{r})) = E_{n}(\bar{k})(e^{i(\bar{k} \cdot\bar{r})}u_{n\bar{k}}(\bar{r}))$$

$$-\frac{\hbar^2}{2m}\nabla\cdot\nabla(e^{i(\bar{k} \cdot\bar{r})}u_{n\bar{k}}(\bar{r}))+V(\bar{r})(e^{i(\bar{k} \cdot\bar{r})}u_{n\bar{k}}(\bar{r})) = E_{n}(\bar{k})(e^{i(\bar{k} \cdot\bar{r})}u_{n\bar{k}}(\bar{r}))$$

$$-\frac{\hbar^2}{2m}\nabla\cdot(i\bar{k}e^{i(\bar{k} \cdot\bar{r})}u_{n\bar{k}}(\bar{r})+e^{i(\bar{k} \cdot\bar{r})}\nabla u_{n\bar{k}}(\bar{r}))+V(\bar{r})(e^{i(\bar{k} \cdot\bar{r})}u_{n\bar{k}}(\bar{r})) = E_{n}(\bar{k})(e^{i(\bar{k} \cdot\bar{r})}u_{n\bar{k}}(\bar{r}))$$

$$-\frac{\hbar^2}{2m}(-k^2e^{i(\bar{k} \cdot\bar{r})}u_{n\bar{k}}(\bar{r})+2i\bar{k}e^{i(\bar{k} \cdot\bar{r})}\nabla u_{n\bar{k}}(\bar{r})+e^{i(\bar{k} \cdot\bar{r})}\nabla^2 u_{n\bar{k}}(\bar{r}))+V(\bar{r})\psi_{n\bar{k}}(\bar{r}) = E_{n}(\bar{k})\psi_{n\bar{k}}(\bar{r}) $$

$$-\frac{\hbar^2}{2m}(\nabla^2+2i\bar{k}\cdot \nabla-k^2)u_{n\bar{k}}(\bar{r})+V(\bar{r})u_{n\bar{k}}(\bar{r}) = E_{n}(\bar{k})u_{n\bar{k}}(\bar{r}) $$

$$-\frac{\hbar^2}{2m}(\nabla-i\bar{k})^2u_{n\bar{k}}(\bar{r})+V(\bar{r})u_{n\bar{k}}(\bar{r}) = E_{n}(\bar{k})u_{n\bar{k}}(\bar{r}) $$

This show that the function $u_{n\bar{k}}(\bar{r})$ satisfies a simil-Hamiltonian, named in literature $H_{\bar{k}}$. One can evaluate from this one the operator $H_{\bar{k}+\bar{q}}$. Let's evaluate how the main term change:

$$(\nabla-i(\bar{k}+\bar{q}))^2=(\nabla^2+2i(\bar{k}+\bar{q})\cdot \nabla-(\bar{k}+\bar{q})^2) = (\nabla^2+2i\bar{k}\cdot \nabla-k^2 +2i\bar{q}\cdot\nabla -q^2 +2 \bar{k}\cdot \bar{q}) = $$

$$=(\nabla-i\bar{k})^2 +(2i\bar{q}\cdot\nabla -q^2 +2 \bar{k}\cdot \bar{q}) \simeq(\nabla-i\bar{k})^2 +(2i\bar{q}\cdot\nabla+2 \bar{k}\cdot \bar{q}) = (\nabla-i\bar{k})^2 +2\bar{q}\cdot(i\nabla+\bar{k}) $$

