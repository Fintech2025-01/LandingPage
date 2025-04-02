import React, {useRef, useEffect} from 'react';
import './Features.css';

function Feature({plus, minus}) {
  const contenedores = [
    {
      class: "container",
      icon: "",
      title: "E-wallet Empresarial:",
      description: "Administra cuentas bancarias y realiza pagos automatizados desde una sola plataforma.",
      totalText: ""
    },
    {
      class: "container",
      icon: "",
      title: "Facturación Electrónica:",
      description: "Genera y envía facturas digitales aprobadas por la DIAN con registro automático de pagos.",
      totalText: ""
    },
    {
      class: "container",
      icon: "",
      title: "Asesor Financiero con IA:",
      description: "Recibe análisis de flujo de caja y recomendaciones personalizadas.",
      totalText: ""
    },
    {
      class: "container",
      icon: "",
      title: "E-Gestión de Nómina:",
      description: "Automatiza pagos a empleados y proveedores con integración contable.",
      totalText: ""
    }];

  const containersRef = useRef(null);

  useEffect(() => {
    const containers = containersRef.current;
    if (containers) {
      const nonEmptyContainers = Array.from(containers.querySelectorAll('.container:not(.empty-container)'));

      const secondNonEmptyContainer = nonEmptyContainers[1];

      if (secondNonEmptyContainer) {
        const containerWidth = secondNonEmptyContainer.offsetWidth;
        const containerMargin = 10;
        const scrollPosition = secondNonEmptyContainer.offsetLeft - (containers.clientWidth / 2) + (containerWidth / 2) + containerMargin;

        containers.scrollTo({
          left: scrollPosition,
          behavior: 'instant',
        });
      }
    }
  }, []);

  const getContainerPosition = (container) => {
    if (container) {
      return container.offsetLeft + (container.offsetWidth / 2);
    }
    return null;
  };

  const getScrollPosition = () => {
    const containers = containersRef.current;
    if (containers) {
      return containers.scrollLeft;
    }
    return 0;
  };

  const changeContainerClass = (e) => {
    const parentDiv = e.target.closest('.container');
    const button = e.target.closest('.Btn-plus');

    if (parentDiv && button) {
      const isSelected = parentDiv.classList.contains('selected');
      document.querySelectorAll('.container').forEach((container) => {
        container.classList.remove('selected');
      });
      document.querySelectorAll('.Btn-plus').forEach((btn) => {
        btn.classList.remove('clicked');
      });

      var scroll = 37.5;
      var diffPos = (getScrollPosition() - getContainerPosition(parentDiv));
      if (!isSelected) {
        console.log(getContainerPosition(parentDiv) + " - " + getScrollPosition() + " % " + (window.innerWidth * 0.9 /2) + " = " + diffPos);
        console.log(getContainerPosition(parentDiv) - getScrollPosition());
        if (diffPos !== 0) {
          console.log(scroll);
          const containers = containersRef.current;
          containers.scrollBy({left: diffPos, behavior: 'smooth'});
          console.log(containers);
          console.log(scroll);
        }
        parentDiv.classList.add('selected');
        button.classList.add('clicked');
      } else {
        scroll = -1 * scroll;
      }
    }

    const containers = containersRef.current;
    containers.scrollBy({left: diffPos, behavior: 'smooth'});
    containers.scrollBy({left: scroll, behavior: 'smooth'});
  };

  const scrollContainers = (direction) => {
    const containers = containersRef.current;
    if (containers) {
      const selectedContainer = containers.querySelector('.container.selected');
  
      if (selectedContainer) {
        const containersArray = Array.from(containers.querySelectorAll('.container:not(.empty-container)'));
        const firstContainer = containersArray[0];
        const lastContainer = containersArray[containersArray.length - 1];

        if ((direction === 'left' && selectedContainer === firstContainer) || (direction === 'right' && selectedContainer === lastContainer)) {
          return;
        }

        selectedContainer.classList.remove('selected');
        const button = selectedContainer.querySelector('.Btn-plus');
        if (button) {
          button.classList.remove('clicked');
        }
      }

      const scrollAmount = 395;
      var offSetCont = getScrollPosition() % 395;
      if (direction === 'left') {
        if (offSetCont !== 0 && !selectedContainer) {
          containers.scrollBy({left: - offSetCont, behavior: 'smooth'});
        } else {
          containers.scrollBy({left: - scrollAmount, behavior: 'smooth'});
        }
      } else if (direction === 'right') {
        if (offSetCont !== 0 && !selectedContainer) {
          containers.scrollBy({left: scrollAmount - offSetCont, behavior: 'smooth'});
        } else {
          containers.scrollBy({left: scrollAmount, behavior: 'smooth'});
        }
      }

      if (selectedContainer) {
        setTimeout(() => {
          const containersArray = Array.from(containers.querySelectorAll('.container:not(.empty-container)'));
          const containerRect = containers.getBoundingClientRect();
          const containerCenter = containerRect.left + containerRect.width / 2;

          let closestContainer = null;
          let closestDistance = Infinity;
  
          containersArray.forEach(container => {
            const rect = container.getBoundingClientRect();
            const containerMiddle = rect.left + rect.width / 2;
            const distance = Math.abs(containerMiddle - containerCenter);
  
            if (distance < closestDistance) {
              closestDistance = distance;
              closestContainer = container;
            }
          });

          if (closestContainer) {
            closestContainer.classList.add('selected');
            const button = closestContainer.querySelector('.Btn-plus');
            if (button) {
              button.classList.add('clicked');
            }
          }
        }, 300);
      }
    }
  };

  return (
    <div className="Features-section">
      <h2>SACCU</h2>
      <h3>Automatiza tus finanzas</h3>
      <div className="containers" ref={containersRef}>
        <div className="container empty-container"></div>
        {contenedores.map((contenedor, index) => (
          <div className={contenedor.class} key={index}>
            <strong>{contenedor.title}</strong>
            <p>{contenedor.description}</p>
            <button className="Btn-plus" onClick={changeContainerClass}>
              <img src={plus} alt="Add" className="Btn-plus-img"/>
              <img src={minus} alt="Subs" className="Btn-minus-img"/>
            </button>
          </div>
        ))}
        <div className="container empty-container"></div>
      </div>
      <div className="navigation-buttons">
        <button onClick={() => scrollContainers('left')}>←</button>
        <button onClick={() => scrollContainers('right')}>→</button>
      </div>
      <div className="Feature-images">
        <img src="./imgs/feature1.jpg" alt="Feature 1" className="Feature-img"/>
        <img src="./imgs/feature2.jpg" alt="Feature 2" className="Feature-img"/>
        <img src="./imgs/feature3.jpg" alt="Feature 3" className="Feature-img"/>
      </div>
    </div>
  );
}

export default Feature;