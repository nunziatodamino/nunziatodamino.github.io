
The same topic in detail: [[Zettelkasten/Master's degree/Introduction to Nanophysics/Approfondimenti/Thermodynamic size effect (TSE)|here]].

An example of [[Zettelkasten/Master's degree/Introduction to Nanophysics/Size equations]] is the size dependent melting temperature of a material.  We can approach this problem by using different models, in each of which, we will derive the correction, rather than all the size equation.  

- Pawlow model (first order) 
Note: we consider the approximation $\rho_S \simeq \rho_L$: 

$$\frac{\Delta T}{T_0}_{PW}=\frac{T-T_0}{T_0}=\left( \Theta-1 \right) = -\frac{2}{L\rho_SR_S} \left( \gamma_S-\gamma_L\left(\frac{\rho_S}{\rho_L}\right)^{2/3}\right) \equiv - \frac{A}{R}  $$

Where $T_0$ is the bulk melting temperature, L is the latent heat of fusion per atom, $\gamma$  is the surface tension of the relative phase and $\rho$  is the volumetric density of the relative phase. 
This model is based on the first order expansion of the chemical potential, also one of the model hypothesis it to consider the melting istantaneous.  
  
- Liquid layer model (LLM)

$$\frac{\Delta T}{T_0}_{LLM} = - \frac{2\gamma_{SL}}{\rho_S L (R-\delta)} - \frac{2\gamma_{LV}}{\rho_S LR}\left(1-\frac{\rho_S}{\rho_L}\right) = -\frac{A}{R-\delta}-\frac{B}{R}$$

Where $\delta$ is the the thickness of the liquid shell surrounding the cluster.  
Is based on the assumption that the the melting is not instantaneous, but it forms a liquid shell around the cluster.  
  
- Smooth interfaces interactions (SII)  
Note: we consider the approximation $\rho_S \simeq \rho_L$ :

$$  \frac{\Delta T}{T_0}_{SII} = - \frac{2\gamma_{SL}}{\rho_S L (R-\delta)}\left[ 1-\exp\left(- \frac{\delta}{\xi} \right)\right] - \left[\gamma_{LV}-\gamma_{SV} + \left( 1-\frac{\delta}{R} \right)^2\gamma_{SL} \right] \frac{R^2}{\rho_S L \xi(R-\delta)^2}\exp\left(- \frac{\delta}{\xi} \right) =  $$

$$ =  -\frac{A}{R-\delta} -\frac{B\ \Gamma R^2}{(R-\delta)^2}$$

Improvement on the LLM model: it is based on the fact that the interface between the liquid layer and the solid cluster is not sharp, but mediated by the smoothing function: 

$$ \sigma(\delta) = 1-\exp\left(-\frac{\delta}{\xi} \right) $$

Of course we expect different expressions for different smoothing functions.


- Thermal expansion variation (TEV)

$$ \frac{\Delta T}{T_0}_{TEV}= -\frac{2}{L\rho_SR_S} \left( \gamma_S-\gamma_L\left(\frac{\rho_S}{\rho_L}\right)^{2/3}\right) + \frac{\Delta E}{L}  $$

Where we call the $\Delta E$  term strain energy difference, due to the thermal expansion matrix-cluster.  
Is an improvement over the first order theory of the Pawlow model. Because of the matrix embedding there effects of heat dissipation that must be considered