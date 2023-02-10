package com.adobe.aem.guides.wkndspa.react.core.models;

import com.adobe.cq.wcm.core.components.models.Image;
import org.osgi.annotation.versioning.ProviderType;

@ProviderType
public interface TextOverAnImageModel extends Image {

    public String getHeadline();
    public String getContent ();

}
