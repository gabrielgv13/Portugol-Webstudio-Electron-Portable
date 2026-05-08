import { inject, Injectable } from "@angular/core";
import { getBlob, ref, Storage, uploadString } from "@angular/fire/storage";

@Injectable({ providedIn: "root" })
export class ShareService {
  storage = inject(Storage, { optional: true });

  async share(code: string): Promise<string | null> {
    if (!this.storage) {
      console.info("Share is disabled in desktop mode.");
      return null;
    }

    const shareId = (Math.random() + 1).toString(36).slice(2, 9);

    try {
      await uploadString(ref(this.storage, `share/${shareId}.por`), code, undefined, {
        contentType: "text/plain",
      });

      return `https://portugol.dev/#share=${shareId}`;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async load(shareId: string): Promise<string | null> {
    if (!this.storage) {
      console.info("Share loading is disabled in desktop mode.");
      return null;
    }

    try {
      const data = await getBlob(ref(this.storage, `share/${shareId}.por`));
      const contents = await data.text();

      return contents;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
