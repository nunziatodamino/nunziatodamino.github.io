This approach is loosely inspired to the [[Variational principle in QM]].
We will show first some inequalities:

>[!info] **I inequality**
>
>$$ \braket{e^{-\lambda \phi}}_{\rho} \ge e^{-\lambda \braket{\phi}_\rho}  $$
>
>Where $\phi$ is a r.v. and $\rho$ its pdf.

- **Proof**:
We start by considering the lemma $e^\phi \ge 1+\phi$. This is easy to prove, as the RHS is the truncated Taylor series.

Now we write:

$$ e^{-\lambda\phi} = e^{-\lambda\phi\pm \lambda\braket{\phi}} = e^{-\lambda\braket{\phi}}e^{-\lambda(\phi-\braket{\phi})} \ge e^{-\lambda\braket{\phi}}(1-\lambda(\phi-\braket{\phi}))  $$

Where we used the lemma in the last line.
Now we take the average of both sides:

$$ \braket{e^{-\lambda\phi}} \ge \braket{e^{-\lambda\braket{\phi}}(1-\lambda(\phi-\braket{\phi}))}  $$

Now we are done, as 

$$
\begin{aligned}
\braket{e^{-\lambda\phi}} \ge\braket{e^{-\lambda\braket{\phi}}(1-\lambda(\phi-\braket{\phi}))} &= \braket{e^{-\lambda\braket{\phi}}}\braket{(1-\lambda(\phi-\braket{\phi}))} =\\
&=\braket{e^{-\lambda\braket{\phi}}}(1-\lambda(\braket{\phi}-\braket{\phi})) = \\
&=\braket{e^{-\lambda\braket{\phi}}} = e^{-\lambda\braket{\phi}}
\end{aligned}$$

As the exponent is a not a r.v. 

>[!info] **II inequality**
> $$ F_N \leq \text{Tr} (\rho \mathscr{H}) +k_BT\ \text{Tr} (\rho \ln \rho) \equiv \mathscr{F}_\rho $$
> Where $\rho$ is a pdf that as the properties $\text{Tr} \rho =1$ and $\rho (\phi) \geq 0, \forall \phi$.
> The functional $\mathscr{F}_\rho$ attains its **minimum** value respect to the variation of the pdf $\rho$ for the equilibrium distribution:
> 
> $$ \rho \equiv \rho_{eq} = \frac{1}{\mathcal{Z}}e^{-\beta\mathscr{H}} $$

- **Proof**

We star from the free energy definition using the canonical partition function:

$$ 
\begin{aligned}
e^{-\beta F_N} &= \mathcal{Z} = \sum_{\{\phi\}}e^{-\beta\mathscr{H}} =\sum_{\{\phi\}}e^{-\beta\mathscr{H} \pm \ln \rho} =\\
&=\sum_{\{\phi\}}\rho e^{-\beta\mathscr{H} - \ln \rho} \equiv \braket{e^{-\beta\mathscr{H} - \ln \rho}}= \braket{e^{-\beta(\mathscr{H} - \frac{1}{\beta}\ln \rho)}} \ge e^{-\beta\braket{\mathscr{H} - \frac{1}{\beta}\ln \rho}} 
\end{aligned}$$

Now, by taking the log:

$$ 
\begin{aligned}
-\beta F_N\ge -\beta\braket{\mathscr{H} - \frac{1}{\beta}\ln \rho} \iff F_N\le \braket{\mathscr{H}} - \frac{1}{\beta}\braket{\ln \rho} 
\end{aligned}$$

If now we write the mean values by their definitions, we get the statement we wanted to prove:

$$ F_N\le \braket{\mathscr{H}} - \frac{1}{\beta}\braket{\ln \rho} \equiv \text{Tr} (\rho \mathscr{H}) +k_BT\ \text{Tr} (\rho \ln \rho) \equiv \mathscr{F}_\rho$$

