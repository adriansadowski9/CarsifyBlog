import styled from 'styled-components';

const MFindWidgetCardContainer = styled.div`
  width: 100%;
  margin-bottom: ${(props) => props.theme.spaces.m};

  .mfind-widget .sidebar {
    max-width: 100%;
  }

  .mfind-widget .mfind-widget-border {
    padding: 0;
    border: none;
    border-radius: 0;
    background: none;

    a {
      display: none;
    }
  }

  .mfind-widget .mfind-widget-container {
    padding: 0;
    background: ${(props) => props.theme.colors.punkta.bg};

    h3 {
      display: none;
    }
  }

  .mfind-widget .mf-header {
    color: ${(props) => props.theme.colors.punkta.text};
    margin-top: 0;
    margin-bottom: ${(props) => props.theme.spaces.xs};
    font-family: 'Maven Pro', sans-serif;

    span {
      color: ${(props) => props.theme.colors.punkta.headerHighlight};
    }
  }

  .mfind-widget .widget-form-container {
    margin-bottom: ${(props) => props.theme.spaces.xs};
  }

  .mfind-widget .mf-c-l,
  .mfind-widget .mf-c-r {
    width: 100%;
    max-width: 100%;
  }

  .mfind-widget .mf-holder-container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    label {
      font-family: 'Maven Pro', sans-serif;
      width: 100%;
      color: ${(props) => props.theme.colors.punkta.text};
      text-align: left;
      margin-bottom: 2.5px;
    }

    .mf-select {
      font-family: 'Maven Pro', sans-serif;
      flex: 1;
      max-width: 100%;
      margin: 0;
      border: 1px solid ${(props) => props.theme.colors.punkta.selectBorder};
    }
  }

  .mfind-widget .mf-c-r .mf-holder-container .mf-select {
    margin-right: 0;
  }

  .mfind-widget .mf-c-r .mf-holder-container .mf-select.fuel_code {
    margin-right: ${(props) => props.theme.spaces.xxxs};
  }

  .mfind-widget .mf-c-r .mf-holder-container .mf-select.engine_capacity {
    margin-left: ${(props) => props.theme.spaces.xxxs};
  }

  .mfind-widget .mf-c-r .mf-holder-container.fuel-and-capacity-container {
    .label-small {
      display: none;
    }

    .label-normal {
      display: block;
    }

    .label-after {
      display: none;
    }
  }

  .mfind-widget .mfind-widget-container .btn-mfind-cta,
  .mfind-widget .mfind-widget-container .btn-mfind-cta: hover {
    font-family: 'Maven Pro', sans-serif;
    font-weight: ${(props) => props.theme.fontWeights.bold};
    display: block;
    background-color: ${(props) => props.theme.colors.punkta.buttonBg};
    padding: 8px 16px;
    border-radius: 0;
  }

  .mfind-widget .btn-mfind-cta span.text:after {
    display: none;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[0]}) {
    width: 400px;
    height: 390px;
  }
`;

export default MFindWidgetCardContainer;
