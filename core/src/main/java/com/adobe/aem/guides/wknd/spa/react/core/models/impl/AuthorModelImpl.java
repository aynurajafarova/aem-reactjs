package com.adobe.aem.guides.wkndspa.react.core.models.impl;

import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import com.adobe.aem.guides.wkndspa.react.core.models.AuthorModel;

// Sling Model annotation
@Model(
  adaptables = SlingHttpServletRequest.class,
  adapters = { AuthorModel.class, ComponentExporter.class },
  resourceType = AuthorModelImpl.RESOURCE_TYPE,
  defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter( //Exporter annotation that serializes the modoel as JSON
  name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
  extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class AuthorModelImpl implements AuthorModel {

  @ValueMapValue
  private String fname;

  @ValueMapValue
  private String lname;

  @ValueMapValue
  private boolean professor;

  // points to AEM component definition in ui.apps
  static final String RESOURCE_TYPE = "wknd-spa-react/components/author";

  // public getter method to expose value of private variable `firstName`
  // adds additional logic to default the firstName to "(Default)" if not set.
  @Override
  public String getFirstName() {
    return StringUtils.isNotBlank(fname) ? fname : "(Default)";
  }

  // public getter method to expose value of private variable `lastName`
  @Override
  public String getLastName() {
    return StringUtils.isNotBlank(lname) ? lname : "(Default)";
  }

  // public getter method to expose value of private variable `professor`
  @Override
  public boolean getIsProfessor() {
    return professor;
  }

  // method required by `ComponentExporter` interface
  // exposes a JSON property named `:type` with a value of `wknd-spa-react/components/author`
  // required to map the JSON export to the SPA component props via the `MapTo`
  @Override
  public String getExportedType() {
    return AuthorModelImpl.RESOURCE_TYPE;
  }
}
